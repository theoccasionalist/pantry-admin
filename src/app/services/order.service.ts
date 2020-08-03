import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getOrderById(orderId: string) {
    return this.httpClient.get<Order>(`${this.url}/orders/${orderId}`);
  }

  getOrders() {
    return this.httpClient.get<Order[]>(`${this.url}/orders/`);
  }

  updateOrderReceived(orderId: string, received: object) {
    return this.httpClient.put(`${this.url}/orders/update-received/${orderId}`, received);
  }

  deleteOrder(orderId: string) {
    return this.httpClient.delete(`${this.url}/orders/delete/${orderId}`);
  }
}
