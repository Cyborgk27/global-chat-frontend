import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private wsUrl = 'ws://192.168.100.3:8000/ws'; // URL del WebSocket
  private socket$: WebSocketSubject<any>;

  constructor() { 
    this.socket$ = webSocket(this.wsUrl);

    // Manejar eventos de WebSocket
    this.socket$.subscribe({
      next: (message) => {
        if (message && message.username && message.content) {
          console.log('Mensaje recibido:', message);
        } else {
          console.error('Mensaje recibido con formato incorrecto:', message);
        }
      },
      error: (err) => console.error('Error en WebSocket:', err),
      complete: () => console.log('Conexión cerrada')
    });
    
  }

  // Enviar mensaje con el formato correcto
sendMessage(username: string, content: string) {
  const message = {
    username: username,
    content: content
  };
  this.socket$.next(message);
}


// Escuchar los mensajes entrantes y procesarlos
onMessage() {
  return this.socket$.asObservable().pipe(
    catchError(err => {
      console.error('Error en la conexión WebSocket:', err);
      return throwError(err);
    })
  );
}


  // Cerrar conexión
  closeConnection() {
    if (this.socket$) {
      this.socket$.complete();
    } else {
      console.error('WebSocket no está conectado.');
    }
  }
}
