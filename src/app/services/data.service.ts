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

  /** Removes any empty types from the shop and updates shop in db if empty types are removed.
   *  Updates shopSource behavior subject.
   *  @param shop the current shop observable.
   */
  updateShop() {
    this.shopService.getShop().subscribe((shop: Shop) => {
      shop = this.updateShopRemoveEmptyTypes(shop);
      this.shopSource.next(shop);
    });
  }

  /** Collects all type ids that have subtypes and then removes all types
   *  from the passed in shop object if both (a) a type does not contain products
   *  and (b) a type does not contain subTypes. Updates db if types are removed.
   *  Called in updateShop().
   *  @param shop the current shop observable.
   *  @returns the shop with epmty types removed.
   */
  private updateShopRemoveEmptyTypes(shop: Shop): Shop {
    const preFilterShopLength: number = shop.shop.length;
    const superTypeIds: string[] = [];
    shop.shop.forEach((subType: Type) => {
      if (subType.superTypeId) {
        superTypeIds.push(subType.superTypeId);
      }
    });
    shop.shop.forEach((currentType: Type) => {
      if (!currentType.products.length && !superTypeIds.includes(currentType._id)) {
        shop.shop = shop.shop.filter((type: Type) => type._id !== currentType._id);
      }
    });
    if (preFilterShopLength > shop.shop.length) {
      this.updateShopService(shop);
    }
    return shop;
  }

  /** Updates the shop in the db.  Called in updateShopRemoveEmptTypes() when empty types
   *  are removed from the passed in shop object.  If the db update fails, the shop view will
   *  be misaligned with the db.  A refresh will align the view with the db, however.  May
   *  improve this in the future.
   *  @param shop the current shop observable.
   */
  private updateShopService(shop: Shop) {
    this.shopService.updateShop(shop._id, shop).subscribe((response: any) => {
      if (response.status === 200) {
        this.snackBar.open('Empty type removed.', 'Dismiss', {
          panelClass: ['green-snackbar']});
      } else {
        this.snackBar.open('Empty type failed to be removed. Please refresh screen.', 'Dismiss', {
          panelClass: ['red-snackbar']});
      }
    });
  }

  updateTypes() {
    this.typeService.getTypes().subscribe((types: Type[]) => {
      this.typesSource.next(types);
    });
  }
}
