import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order, OrderStatus } from "../entities/order.entity";
import { User } from "../entities/user.entity";
import { WebsocketGateway } from "../websocket/websocket.service";

export interface CreateOrderDto {
  serviceName: string;
  serviceNumber: string;
  phoneNumber: string;
  description: string;
}

export interface UpdateOrderStatusDto {
  status: OrderStatus;
}

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private websocketGateway: WebsocketGateway,
  ) {}

  async create(userId: string, createOrderDto: CreateOrderDto): Promise<Order> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException("Foydalanuvchi topilmadi");
    }

    const order = this.orderRepository.create({
      ...createOrderDto,
      userId,
      status: OrderStatus.PENDING,
    });

    const savedOrder = await this.orderRepository.save(order);

    // WebSocket orqali admin panelga notification yuborish
    this.websocketGateway.sendNewOrderNotification({
      ...savedOrder,
      user: user,
    });

    return savedOrder;
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      order: { createdAt: "DESC" },
      relations: ["user"],
    });
  }

  async findByUser(userId: string): Promise<Order[]> {
    return this.orderRepository.find({
      where: { userId },
      order: { createdAt: "DESC" },
    });
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ["user"],
    });
    if (!order) {
      throw new NotFoundException("Buyurtma topilmadi");
    }
    return order;
  }

  async updateStatus(id: string, status: OrderStatus): Promise<Order> {
    const order = await this.findOne(id);
    order.status = status;
    const updatedOrder = await this.orderRepository.save(order);

    // Status o'zgarganda notification yuborish
    this.websocketGateway.sendOrderStatusUpdate(updatedOrder);

    return updatedOrder;
  }

  async remove(id: string): Promise<void> {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
  }

  async getStats(): Promise<{
    total: number;
    pending: number;
    inProgress: number;
    completed: number;
    cancelled: number;
  }> {
    const total = await this.orderRepository.count();
    const pending = await this.orderRepository.count({
      where: { status: OrderStatus.PENDING },
    });
    const inProgress = await this.orderRepository.count({
      where: { status: OrderStatus.IN_PROGRESS },
    });
    const completed = await this.orderRepository.count({
      where: { status: OrderStatus.COMPLETED },
    });
    const cancelled = await this.orderRepository.count({
      where: { status: OrderStatus.CANCELLED },
    });

    return { total, pending, inProgress, completed, cancelled };
  }
}
