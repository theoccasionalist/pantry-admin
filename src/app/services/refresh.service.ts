import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  orderRefresh = false;
  pantryRefresh = false;

  private orderRefreshSource = new BehaviorSubject(this.orderRefresh);
  currentOrderRefresh = this.orderRefreshSource.asObservable();

  private pantryRefreshSource = new BehaviorSubject(this.pantryRefresh);
  currentPantryRefresh = this.pantryRefreshSource.asObservable();

  constructor() { }

  getOrderRefresh(): Observable<boolean> {
    return this.currentOrderRefresh;
  }

  getPantryRefresh(): Observable<boolean> {
    return this.currentPantryRefresh;
  }

  openOrderRefresh() {
    this.orderRefreshSource.next(true);
  }

  openPantryRefresh() {
    this.pantryRefreshSource.next(true);
  }

  closeOrderRefresh() {
    this.orderRefreshSource.next(false);
  }

  closePantryRefresh() {
    this.pantryRefreshSource.next(false);
  }
}
