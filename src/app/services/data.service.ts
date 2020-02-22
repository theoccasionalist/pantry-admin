import { Injectable } from '@angular/core';
import { TypeService } from './type.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Type } from '../models/type.model';
import { Observable, Subject } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';
import { Shop } from '../models/shop.model';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Product[] = [];
  shop: Shop = {
    _id: null,
    shop: []
  };
  types: Type[] = [];

  constructor(private productService: ProductService, private shopService: ShopService, private typeService: TypeService) { }

  private productsSource = new BehaviorSubject(this.products);
  currentProducts = this.productsSource.asObservable();

  private shopSource = new BehaviorSubject(this.shop);
  currentShop = this.shopSource.asObservable();

  private typesSource = new BehaviorSubject(this.types);
  currentTypes = this.typesSource.asObservable();

  getProducts(): Observable<Product[]> {
    return this.currentProducts;
  }

  getShop(): Observable<Shop> {
    console.log('data service shop emitting');
    return this.currentShop;
  }

  getTypes(): Observable<Type[]> {
    console.log('Data service types emitting');
    return this.currentTypes;
  }

  updateProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.productsSource.next(products);
    });
  }

  updateShop() {
    this.shopService.getShop().subscribe((shop: Shop) => {
      this.shopSource.next({...shop});
    });
  }

  updateTypes() {
    console.log('data service called');
    this.typeService.getTypes().subscribe((types: Type[]) => {
      this.typesSource.next(types);
    });
  }
}
