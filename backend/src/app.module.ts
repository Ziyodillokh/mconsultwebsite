import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";
import { OrdersModule } from "./orders/orders.module";
import { AppController } from "./app.controller";
import { User } from "./entities/user.entity";
import { Order } from "./entities/order.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT || "5432"),
      username: process.env.DB_USERNAME || "postgres",
      password: process.env.DB_PASSWORD || "postgres",
      database: process.env.DB_NAME || "magzuna_db",
      entities: [User, Order],
      migrations: ["dist/migrations/*.js"],
      synchronize: process.env.DB_SYNC === "true",
      logging: false,
    }),

    TypeOrmModule.forFeature([User]),
    AuthModule,
    AdminModule,
    OrdersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
