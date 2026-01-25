import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { Order } from "../entities/order.entity";
import { User } from "../entities/user.entity";
import { AuthModule } from "../auth/auth.module";
import { AdminGuard } from "../admin/admin.guard";
import { WebsocketModule } from "../websocket/websocket.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, User]),
    AuthModule,
    WebsocketModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, AdminGuard],
  exports: [OrdersService],
})
export class OrdersModule {}
