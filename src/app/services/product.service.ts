import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'https://damp-brook-50473.herokuapp.com';
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProductById(productId: string) {
    return this.httpClient.get<Product>(`${this.uri}/products/${productId}`);
  }

  getProducts() {
    return this.httpClient.get<Product[]>(`${this.uri}/products`);
  }

  addProduct(product: object) {
    return this.httpClient.post(`${this.uri}/products/add`, product);
  }

  updateProduct(productId: string, product: object) {
    return this.httpClient.put(`${this.uri}/products/update/${productId}`, product);
  }

  deleteProduct(productId: string) {
    return this.httpClient.delete(`${this.uri}/products/delete/${productId}`);
  }
}
