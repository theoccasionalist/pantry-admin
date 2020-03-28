import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/shop.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  uri = 'https://modern-volunteer-test.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  getShop() {
    return this.httpClient.get<Shop>(`${this.uri}/shop`).pipe(
      map(result => result[0])
    );
  }

  updateShop(shopId: string, shop: Shop) {
    return this.httpClient.put<Shop>(`${this.uri}/shop/update/${shopId}`, shop);
  }
}
