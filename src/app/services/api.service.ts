import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://192.168.100.3:8000/messages';

  private http = inject(HttpClient)

  constructor() 
  {
    var messages = this.getAllMessages()
    console.log('xd', messages)
  }

  #result = signal<any>({
    messages: []
  })
  // Obtener todos los mensajes
  getAllMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
