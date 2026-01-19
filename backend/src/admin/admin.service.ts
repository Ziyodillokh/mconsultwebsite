import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Like, ILike } from "typeorm";
import * as bcrypt from "bcryptjs";
import { User, UserRole } from "../entities/user.entity";

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  adminUsers: number;
  newUsersToday: number;
  newUsersThisWeek: number;
  newUsersThisMonth: number;
}

export interface UserListParams {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  isActive?: boolean;
  sortBy?: string;
  sortOrder?: "ASC" | "DESC";
}

export interface PaginatedUsers {
  users: Omit<User, "password">[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Dashboard statistikasi
  async getDashboardStats(): Promise<DashboardStats> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    weekAgo.setHours(0, 0, 0, 0);

    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    monthAgo.setHours(0, 0, 0, 0);

    const [
      totalUsers,
      activeUsers,
      inactiveUsers,
      adminUsers,
      newUsersToday,
      newUsersThisWeek,
      newUsersThisMonth,
    ] = await Promise.all([
      this.userRepository.count(),
      this.userRepository.count({ where: { isActive: true } }),
      this.userRepository.count({ where: { isActive: false } }),
      this.userRepository.count({ where: { role: "admin" } }),
      this.userRepository
        .createQueryBuilder("user")
        .where("user.createdAt >= :today", { today })
        .getCount(),
      this.userRepository
        .createQueryBuilder("user")
        .where("user.createdAt >= :weekAgo", { weekAgo })
        .getCount(),
      this.userRepository
        .createQueryBuilder("user")
        .where("user.createdAt >= :monthAgo", { monthAgo })
        .getCount(),
    ]);

    return {
      totalUsers,
      activeUsers,
      inactiveUsers,
      adminUsers,
      newUsersToday,
      newUsersThisWeek,
      newUsersThisMonth,
    };
  }

  // Barcha foydalanuvchilarni olish (pagination bilan)
  async getUsers(params: UserListParams): Promise<PaginatedUsers> {
    const {
      page = 1,
      limit = 10,
      search,
      role,
      isActive,
      sortBy = "createdAt",
      sortOrder = "DESC",
    } = params;

    const skip = (page - 1) * limit;

    const queryBuilder = this.userRepository
      .createQueryBuilder("user")
      .select([
        "user.id",
        "user.email",
        "user.name",
        "user.role",
        "user.isActive",
        "user.createdAt",
        "user.updatedAt",
      ]);

    // Search filter
    if (search) {
      queryBuilder.andWhere(
        "(user.email ILIKE :search OR user.name ILIKE :search)",
        { search: `%${search}%` },
      );
    }

    // Role filter
    if (role) {
      queryBuilder.andWhere("user.role = :role", { role });
    }

    // Active filter
    if (isActive !== undefined) {
      queryBuilder.andWhere("user.isActive = :isActive", { isActive });
    }

    // Sorting
    const validSortFields = ["createdAt", "updatedAt", "name", "email", "role"];
    const sortField = validSortFields.includes(sortBy) ? sortBy : "createdAt";
    queryBuilder.orderBy(`user.${sortField}`, sortOrder);

    // Pagination
    queryBuilder.skip(skip).take(limit);

    const [users, total] = await queryBuilder.getManyAndCount();

    return {
      users: users.map((user) => this.excludePassword(user)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // Bitta foydalanuvchini olish
  async getUserById(id: string): Promise<Omit<User, "password"> | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) return null;
    return this.excludePassword(user);
  }

  // Foydalanuvchi yaratish
  async createUser(data: {
    email: string;
    password: string;
    name: string;
    role?: string;
    isActive?: boolean;
  }): Promise<Omit<User, "password">> {
    const existingUser = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error("Bu email allaqachon ro'yxatdan o'tgan");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.userRepository.create({
      email: data.email,
      password: hashedPassword,
      name: data.name,
      role: data.role || UserRole.USER,
      isActive: data.isActive !== undefined ? data.isActive : true,
    });

    const savedUser = await this.userRepository.save(user);
    return this.excludePassword(savedUser);
  }

  // Foydalanuvchini yangilash
  async updateUser(
    id: string,
    data: {
      email?: string;
      name?: string;
      password?: string;
      role?: string;
      isActive?: boolean;
    },
  ): Promise<Omit<User, "password">> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error("Foydalanuvchi topilmadi");
    }

    // Check email uniqueness if changing
    if (data.email && data.email !== user.email) {
      const existingUser = await this.userRepository.findOne({
        where: { email: data.email },
      });
      if (existingUser) {
        throw new Error("Bu email allaqachon ro'yxatdan o'tgan");
      }
      user.email = data.email;
    }

    if (data.name) user.name = data.name;
    if (data.role) user.role = data.role;
    if (data.isActive !== undefined) user.isActive = data.isActive;

    if (data.password) {
      user.password = await bcrypt.hash(data.password, 10);
    }

    const savedUser = await this.userRepository.save(user);
    return this.excludePassword(savedUser);
  }

  // Foydalanuvchini o'chirish
  async deleteUser(id: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error("Foydalanuvchi topilmadi");
    }

    await this.userRepository.remove(user);
    return true;
  }

  // Foydalanuvchi statusini o'zgartirish
  async toggleUserStatus(id: string): Promise<Omit<User, "password">> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error("Foydalanuvchi topilmadi");
    }

    user.isActive = !user.isActive;
    const savedUser = await this.userRepository.save(user);
    return this.excludePassword(savedUser);
  }

  // Foydalanuvchi rolini o'zgartirish
  async changeUserRole(
    id: string,
    role: string,
  ): Promise<Omit<User, "password">> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error("Foydalanuvchi topilmadi");
    }

    user.role = role;
    const savedUser = await this.userRepository.save(user);
    return this.excludePassword(savedUser);
  }

  private excludePassword(user: User): Omit<User, "password"> {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
