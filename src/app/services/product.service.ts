import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.apiUrl;
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProductById(productId: string) {
    return this.httpClient.get<Product>(`${this.url}/products/${productId}`);
  }

  getProducts() {
    return this.httpClient.get<Product[]>(`${this.url}/products`);
  }

  addProduct(product: object) {
    return this.httpClient.post(`${this.url}/products/add`, product);
  }

  updateProduct(productId: string, product: object) {
    return this.httpClient.put(`${this.url}/products/update/${productId}`, product);
  }

  deleteProduct(productId: string) {
    return this.httpClient.delete(`${this.url}/products/delete/${productId}`);
  }
}
