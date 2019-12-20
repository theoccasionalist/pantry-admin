import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsByTypeService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  getProductsByTypes() {
    return this.httpClient.get(`${this.uri}/products-by-types`).pipe(
      map(result => result[0].productsByTypes)
    );
  }

  removeProductFromType(typeId: string, productId: string) {
    return this.httpClient.get(`${this.uri}/products-by-types/remove-product/${typeId}/${productId}`);
  }
}
