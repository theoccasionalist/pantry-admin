import { Injectable } from '@angular/core';
import { TypeService } from './type.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Type } from '../models/type.model';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';
import { Shop } from '../models/shop.model';
import { ShopService } from './shop.service';
import { OrderService } from './order.service';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  orders: Order[] = [];
  products: Product[] = [];
  shop: Shop = {_id: null, shop: []};
  types: Type[] = [];

  constructor(private snackBar: MatSnackBar, private orderService: OrderService, private productService: ProductService, 
              private shopService: ShopService, private typeService: TypeService) {
                this.updateShop();
                this.updateTypes();
                this.updateProducts();
                this.updateOrders();
               }

  private ordersSource = new BehaviorSubject(this.orders);
  currentOrders = this.ordersSource.asObservable();

  private productsSource = new BehaviorSubject(this.products);
  currentProducts = this.productsSource.asObservable();

  private shopSource = new BehaviorSubject(this.shop);
  currentShop = this.shopSource.asObservable();

  private typesSource = new BehaviorSubject(this.types);
  currentTypes = this.typesSource.asObservable();

  getOrders(): Observable<Order[]> {
    return this.currentOrders;
  }

  getOrderById(orderId: string) {
    return this.currentOrders.pipe(map(
      (orders: Order[]) => orders.find((order: Order) => order._id === orderId)
    ));
  }

  getProducts(): Observable<Product[]> {
    return this.currentProducts;
  }

  getProductById(productId: string): Observable<Product> {
    return this.currentProducts.pipe(map(
      (products: Product[]) => products.find((product: Product) => product._id === productId)
    ));
  }

  getShop(): Observable<Shop> {
    return this.currentShop;
  }

  getTypes(): Observable<Type[]> {
    return this.currentTypes;
  }

  getTypeById(typeId: string) {
    return this.currentTypes.pipe(map(
      (types: Type[]) => types.find((type: Type) => type._id === typeId)
    ));
  }

  updateOrders() {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.ordersSource.next(orders);
    });
  }

  updateProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.productsSource.next(products);
    });
  }

  updateShop() {
    this.shopService.getShop().subscribe((shop: Shop) => {
      if (shop.shop.some((currentType: Type) => !currentType.products.length)) {
        shop.shop.forEach((type: Type) => {
          if (!type.products.length) {
            shop.shop = shop.shop.filter((emptyType: Type) => emptyType._id !== type._id);
          }
        });
        this.shopService.updateShop(shop._id, shop).subscribe((response: any) => {
          response.status === 200 ?
            this.shopSource.next(shop) :
            this.snackBar.open('Database error. Failed to update.', 'Dismiss', {
              panelClass: ['red-snackbar']});
        });
      } else {
        this.shopSource.next(shop);
      }
    });
  }

  updateTypes() {
    this.typeService.getTypes().subscribe((types: Type[]) => {
      this.typesSource.next(types);
    });
  }
}
