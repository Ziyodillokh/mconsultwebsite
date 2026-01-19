import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";
import { User, UserRole } from "../entities/user.entity";

// Validation helper
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password: string): { valid: boolean; message: string } {
  if (password.length < 6) {
    return { valid: false, message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" };
  }
  if (password.length > 100) {
    return { valid: false, message: "Parol juda uzun" };
  }
  return { valid: true, message: "" };
}

function validateName(name: string): { valid: boolean; message: string } {
  if (!name || name.trim().length < 2) {
    return { valid: false, message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" };
  }
  if (name.length > 100) {
    return { valid: false, message: "Ism juda uzun" };
  }
  return { valid: true, message: "" };
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(
    email: string,
    password: string,
    name: string,
  ): Promise<{ user: Omit<User, "password">; token: string }> {
    // Validate email
    if (!email || !validateEmail(email)) {
      throw new Error("Yaroqli email kiriting");
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      throw new Error(passwordValidation.message);
    }

    // Validate name
    const nameValidation = validateName(name);
    if (!nameValidation.valid) {
      throw new Error(nameValidation.message);
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if user exists
    const existingUser = await this.userRepository.findOne({
      where: { email: normalizedEmail },
    });
    if (existingUser) {
      throw new Error("Bu email allaqachon ro'yxatdan o'tgan");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with explicit role
    const user = this.userRepository.create({
      email: normalizedEmail,
      password: hashedPassword,
      name: name.trim(),
      role: UserRole.USER,
      isActive: true,
    });

    const savedUser = await this.userRepository.save(user);

    // Generate token
    const token = this.generateToken(savedUser);

    return {
      user: this.excludePassword(savedUser),
      token,
    };
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ user: Omit<User, "password">; token: string }> {
    // Validate inputs
    if (!email || !password) {
      throw new Error("Email va parol kiritilishi shart");
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Find user
    const user = await this.userRepository.findOne({
      where: { email: normalizedEmail },
    });

    if (!user) {
      throw new Error("Email yoki parol noto'g'ri");
    }

    // Check if user is active
    if (!user.isActive) {
      throw new Error("Akkountingiz faol emas. Administrator bilan bog'laning");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Email yoki parol noto'g'ri");
    }

    // Generate token
    const token = this.generateToken(user);

    return {
      user: this.excludePassword(user),
      token,
    };
  }

  private generateToken(user: User): string {
    return this.jwtService.sign({
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });
  }

  private excludePassword(user: User): Omit<User, "password"> {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
