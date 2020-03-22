import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  uri = 'https://damp-brook-50473.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  getOrderById(orderId: string) {
    return this.httpClient.get<Order>(`${this.uri}/orders/${orderId}`);
  }

  getOrders() {
    return this.httpClient.get<Order[]>(`${this.uri}/orders/`);
  }

  updateOrderReceived(orderId: string, received: object) {
    return this.httpClient.put(`${this.uri}/orders/update-received/${orderId}`, received);
  }

  deleteOrder(orderId: string) {
    return this.httpClient.delete(`${this.uri}/orders/delete/${orderId}`);
  }
}
