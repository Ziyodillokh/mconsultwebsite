import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { Order } from "../entities/order.entity";
import { User } from "../entities/user.entity";
import { AuthModule } from "../auth/auth.module";
import { AdminGuard } from "../admin/admin.guard";

@Module({
  imports: [TypeOrmModule.forFeature([Order, User]), AuthModule],
  controllers: [OrdersController],
  providers: [OrdersService, AdminGuard],
  exports: [OrdersService],
})
export class OrdersModule {}
