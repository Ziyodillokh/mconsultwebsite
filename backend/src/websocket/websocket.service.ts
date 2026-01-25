import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    console.log(`✅ Client ulandi: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`❌ Client uzildi: ${client.id}`);
  }

  // Yangi zakaz haqida notification
  sendNewOrderNotification(order: any) {
    console.log("🔔 Yangi zakaz notification yuborilmoqda:", order?.id);
    this.server.emit("newOrder", {
      message: "Yangi zakaz keldi!",
      order: {
        id: order?.id,
        customer: order?.user?.name || "Mijoz",
        service: order?.serviceName,
        phone: order?.phoneNumber,
        status: order?.status,
        createdAt: order?.createdAt,
      },
    });
  }

  // Zakaz statusi o'zgarganda
  sendOrderStatusUpdate(order: any) {
    console.log("📝 Zakaz yangilandi:", order?.id);
    this.server.emit("orderUpdate", {
      message: "Zakaz yangilandi",
      order: {
        id: order?.id,
        status: order?.status,
      },
    });
  }
}
