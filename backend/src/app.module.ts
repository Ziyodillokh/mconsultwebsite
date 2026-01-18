import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./database.config";
import { AuthModule } from "./auth/auth.module";
import { AppController } from "./app.controller";
import { User } from "./entities/user.entity";

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
      entities: [User],
      migrations: ["src/migrations/*.ts"],
      synchronize: process.env.DB_SYNC === "true" ? true : false,
      logging: false,
      retryAttempts: 3,
      retryDelay: 3000,
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
