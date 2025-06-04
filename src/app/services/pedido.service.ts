import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://127.0.0.1:8000/pedido'; // Cambia si despliegas en Cloud Run

  constructor(private http: HttpClient) {}

  enviarPedido(pedido: any): Observable<any> {
    return this.http.post(this.apiUrl, pedido);
  }
}
