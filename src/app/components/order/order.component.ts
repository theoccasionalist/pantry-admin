import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { switchMap, take } from 'rxjs/operators';
import { Order } from 'src/app/models/order.model';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  loading = true;
  order: Order;
  sliceId: string;
  subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router,
              private orderService: OrderService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscription.add(
      this.activatedRoute.params.pipe(
        switchMap(params => this.dataService.getOrderById(params.id)),
        take(1)
      ).subscribe((order: Order) => {
        this.rerouteOnEmptyOrder(order);
        this.order = order;
        this.sliceId = order._id.slice(-5);
        this.sortProductsByName();
        this.sortTypesByName();
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBackClick() {
    this.router.navigate(['/orders']);
  }

  onReceivedClick() {
    const received = {received: !this.order.received};
    this.orderService.updateOrderReceived(this.order._id, received).subscribe((response: any) => {
      this.showResponseStatus(response.status);
    });
  }

  rerouteOnEmptyOrder(order: any) {
    if (order === undefined || Object.entries(order).length === 0 && order.constructor === Object) {
      this.snackBar.open('Order not found. Please try again.', 'Dismiss', {
        panelClass: ['red-snackbar']
      });
      this.router.navigate([`/orders`]);
    }
  }

  showResponseStatus(status: any) {
    if (status === 200) {
      let update: string;
      this.order.received ? update = 'unreceived' : update = 'received';
      this.snackBar.open(`Order marked as ${update}.`, 'Dismiss', {
        panelClass: ['green-snackbar']});
      this.order.received = !this.order.received;
    } else {
      this.snackBar.open('Order failed to update.', 'Dismiss', {
        panelClass: ['red-snackbar']});
    }
    this.dataService.updateOrders();
  }

  sortProductsByName() {
    this.order.cart.forEach((typeInCart: CartItemsByType) => {
      typeInCart.products.sort(
        (before, after) => before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1);
    });
  }

  sortTypesByName() {
    this.order.cart.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
  }
}
