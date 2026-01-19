import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { OrdersService, CreateOrderDto } from "./orders.service";
import { OrderStatus } from "../entities/order.entity";
import { AdminGuard } from "../admin/admin.guard";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // Create new order (authenticated users only)
  @Post()
  @UseGuards(AuthGuard("jwt"))
  async create(@Request() req: any, @Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(req.user.id, createOrderDto);
  }

  // Get user's orders
  @Get("my-orders")
  @UseGuards(AuthGuard("jwt"))
  async getMyOrders(@Request() req: any) {
    return this.ordersService.findByUser(req.user.id);
  }

  // Admin: Get all orders
  @Get()
  @UseGuards(AuthGuard("jwt"), AdminGuard)
  async findAll() {
    return this.ordersService.findAll();
  }

  // Admin: Get order stats
  @Get("stats")
  @UseGuards(AuthGuard("jwt"), AdminGuard)
  async getStats() {
    return this.ordersService.getStats();
  }

  // Admin: Get single order
  @Get(":id")
  @UseGuards(AuthGuard("jwt"), AdminGuard)
  async findOne(@Param("id") id: string) {
    return this.ordersService.findOne(id);
  }

  // Admin: Update order status
  @Put(":id/status")
  @UseGuards(AuthGuard("jwt"), AdminGuard)
  async updateStatus(
    @Param("id") id: string,
    @Body("status") status: OrderStatus,
  ) {
    return this.ordersService.updateStatus(id, status);
  }

  // Admin: Delete order
  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), AdminGuard)
  async remove(@Param("id") id: string) {
    await this.ordersService.remove(id);
    return { message: "Buyurtma o'chirildi" };
  }
}
