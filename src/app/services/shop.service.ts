import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/shop.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { entriesIn } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getShop() {
    return this.httpClient.get<Shop>(`${this.url}/shop`).pipe(
      map(result => result[0])
    );
  }

  updateShop(shopId: string, shop: Shop) {
    return this.httpClient.put<Shop>(`${this.url}/shop/update/${shopId}`, shop);
  }
}
