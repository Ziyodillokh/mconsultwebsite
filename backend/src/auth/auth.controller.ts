import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  async register(
    @Body() body: { email: string; password: string; name: string },
  ) {
    try {
      return await this.authService.register(
        body.email,
        body.password,
        body.name,
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Registration failed";
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post("login")
  async login(@Body() body: { email: string; password: string }) {
    try {
      return await this.authService.login(body.email, body.password);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed";
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    }
  }
}
