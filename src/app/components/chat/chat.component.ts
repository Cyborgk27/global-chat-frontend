import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultChatBubbleComponent } from '../default-chat-bubble/default-chat-bubble.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  username: string = ''; // El nombre de usuario puede ser dinámico
  content: string = '';
  messages: Array<any> = []; // Lista para almacenar los mensajes recibidos

  constructor(private websocketService: WebsocketService) {
    
  }

  ngOnInit() {
    // Suscribirse para recibir los mensajes
    this.websocketService.onMessage().subscribe((message: any) => {
      console.log('Mensaje recibido:', message);
      this.messages.push(message); // Añadir el mensaje recibido a la lista
    });
  }

   // ====================Lista de colores predefinidos========================
   private userColors: { [key: string]: string } = {};
   private colorPalette: string[] = ['#7289da', '#f04747', '#faa61a', '#43b581', '#9b59b6', '#e91e63', '#1abc9c'];
 
   // Obtener el color de un usuario, asignar si no tiene uno
   getUserColor(username: string): string {
     if (!this.userColors[username]) {
       // Asignar un color al azar de la paleta
       const colorIndex = Object.keys(this.userColors).length % this.colorPalette.length;
       this.userColors[username] = this.colorPalette[colorIndex];
     }
     return this.userColors[username];
   }
 

  sendMessage() {
    // Enviar mensaje con el contenido y el nombre de usuario
    if (this.content.trim()) {
      this.websocketService.sendMessage(this.username, this.content);
      this.content = ''; // Limpiar el campo de contenido después de enviar
    }
  }
}
