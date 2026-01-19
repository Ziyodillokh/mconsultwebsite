import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpException,
  HttpStatus,
  Req,
} from "@nestjs/common";
import { AdminService, UserListParams } from "./admin.service";
import { AdminGuard } from "./admin.guard";

@Controller("admin")
@UseGuards(AdminGuard)
export class AdminController {
  constructor(private adminService: AdminService) {}

  // Dashboard statistikasi
  @Get("dashboard")
  async getDashboard() {
    try {
      const stats = await this.adminService.getDashboardStats();
      return { success: true, data: stats };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Barcha foydalanuvchilar
  @Get("users")
  async getUsers(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("role") role?: string,
    @Query("isActive") isActive?: string,
    @Query("sortBy") sortBy?: string,
    @Query("sortOrder") sortOrder?: "ASC" | "DESC",
  ) {
    try {
      const params: UserListParams = {
        page: page ? parseInt(page) : 1,
        limit: limit ? parseInt(limit) : 10,
        search,
        role,
        isActive: isActive !== undefined ? isActive === "true" : undefined,
        sortBy,
        sortOrder,
      };

      const result = await this.adminService.getUsers(params);
      return { success: true, data: result };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Bitta foydalanuvchi
  @Get("users/:id")
  async getUserById(@Param("id") id: string) {
    try {
      const user = await this.adminService.getUserById(id);
      if (!user) {
        throw new HttpException(
          "Foydalanuvchi topilmadi",
          HttpStatus.NOT_FOUND,
        );
      }
      return { success: true, data: user };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Yangi foydalanuvchi
  @Post("users")
  async createUser(
    @Body()
    body: {
      email: string;
      password: string;
      name: string;
      role?: string;
      isActive?: boolean;
    },
  ) {
    try {
      const user = await this.adminService.createUser(body);
      return { success: true, data: user, message: "Foydalanuvchi yaratildi" };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Foydalanuvchini yangilash
  @Put("users/:id")
  async updateUser(
    @Param("id") id: string,
    @Body()
    body: {
      email?: string;
      name?: string;
      password?: string;
      role?: string;
      isActive?: boolean;
    },
  ) {
    try {
      const user = await this.adminService.updateUser(id, body);
      return { success: true, data: user, message: "Foydalanuvchi yangilandi" };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Foydalanuvchini o'chirish
  @Delete("users/:id")
  async deleteUser(@Param("id") id: string, @Req() req: any) {
    try {
      // O'zini o'chirishni oldini olish
      if (req.user && req.user.id === id) {
        throw new HttpException(
          "O'zingizni o'chira olmaysiz",
          HttpStatus.BAD_REQUEST,
        );
      }

      await this.adminService.deleteUser(id);
      return { success: true, message: "Foydalanuvchi o'chirildi" };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Status o'zgartirish
  @Put("users/:id/toggle-status")
  async toggleStatus(@Param("id") id: string, @Req() req: any) {
    try {
      // O'zini o'chirishni oldini olish
      if (req.user && req.user.id === id) {
        throw new HttpException(
          "O'zingizning statusingizni o'zgartira olmaysiz",
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.adminService.toggleUserStatus(id);
      return { success: true, data: user, message: "Status o'zgartirildi" };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  // Rol o'zgartirish
  @Put("users/:id/role")
  async changeRole(
    @Param("id") id: string,
    @Body() body: { role: string },
    @Req() req: any,
  ) {
    try {
      // O'zini o'chirishni oldini olish
      if (req.user && req.user.id === id) {
        throw new HttpException(
          "O'zingizning rolingizni o'zgartira olmaysiz",
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.adminService.changeUserRole(id, body.role);
      return { success: true, data: user, message: "Rol o'zgartirildi" };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      const message =
        error instanceof Error ? error.message : "Xatolik yuz berdi";
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }
}
