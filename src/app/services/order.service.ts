import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getOrderById(orderId: string) {
    return this.httpClient.get<Order>(`${this.uri}/orders/${orderId}`);
  }

  getOrders() {
    return this.httpClient.get<Order[]>(`${this.uri}/orders`);
  }

  updateOrderReceived(orderId: string, received: object) {
    console.log(received);
    return this.httpClient.put(`${this.uri}/orders/update-received/${orderId}`, received);
  }

  deleteOrder(orderId: string) {
    return this.httpClient.delete(`${this.uri}/orders/delete/${orderId}`);
  }
}
