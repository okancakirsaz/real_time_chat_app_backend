import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { MessageDto } from "./message.dto";

@WebSocketGateway()
export class ChatGateway{
@WebSocketServer()
server;

@SubscribeMessage("chat_update")
handleChatUpdate(@MessageBody() body:MessageDto){
    this.server.emit("chat_update",body);
}
}