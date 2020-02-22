import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  orderRefresh = false;
  productRefresh = false;
  typeRefresh = false;
  pantryRefresh = false;

  private orderRefreshSource = new BehaviorSubject(this.orderRefresh);
  currentOrderRefresh = this.orderRefreshSource.asObservable();

  private productRefreshSource = new BehaviorSubject(this.productRefresh);
  currentProductRefresh = this.productRefreshSource.asObservable();

  private typeRefreshSource = new BehaviorSubject(this.typeRefresh);
  currentTypeRefresh = this.typeRefreshSource.asObservable();

  private pantryRefreshSource = new BehaviorSubject(this.pantryRefresh);
  currentPantryRefresh = this.pantryRefreshSource.asObservable();

  constructor() { }

  getOrderRefresh(): Observable<boolean> {
    return this.currentOrderRefresh;
  }

  getProductRefresh(): Observable<boolean> {
    return this.currentProductRefresh;
  }

  getTypeRefresh(): Observable<boolean> {
    return this.currentTypeRefresh;
  }

  getPantryRefresh(): Observable<boolean> {
    return this.currentPantryRefresh;
  }

  openOrderRefresh() {
    this.orderRefreshSource.next(true);
  }

  openProductRefresh() {
    this.productRefreshSource.next(true);
  }

  openTypeRefresh() {
    this.typeRefreshSource.next(true);
  }

  openPantryRefresh() {
    this.pantryRefreshSource.next(true);
  }

  closeOrderRefresh() {
    this.orderRefreshSource.next(false);
  }

  closeProductRefresh() {
    this.productRefreshSource.next(false);
  }

  closeTypeRefresh() {
    this.typeRefreshSource.next(false);
  }

  closePantryRefresh() {
    this.pantryRefreshSource.next(false);
  }
}
