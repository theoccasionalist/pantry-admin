import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsByTypeService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getProductsByTypes() {
    return this.httpClient.get(`${this.url}/products-by-types`).pipe(
      map(result => result[0].productsByTypes)
    );
  }

  removeProductFromType(typeId: string, productId: string) {
    return this.httpClient.get(`${this.url}/products-by-types/remove-product/${typeId}/${productId}`);
  }
}
