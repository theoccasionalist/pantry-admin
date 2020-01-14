import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { switchMap, take } from 'rxjs/operators';
import { Order } from 'src/app/models/order.model';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-view',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  loading = true;
  order: Order;
  sliceId: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private orderService: OrderService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(params => this.orderService.getOrderById(params.id)),
      take(1)
    ).subscribe((order: Order) => {
      this.order = order;
      this.sliceId = order._id.slice(-5);
      this.sortItemsByName();
      this.sortTypesByName();
      this.loading = false;
    });
  }

  onBackClick() {
    this.router.navigate(['/orders']);
  }

  onReceivedClick() {
    const received = {received: !this.order.received};
    this.orderService.updateOrderReceived(this.order._id, received).subscribe((response: any) => {
      if (response.status === 200) {
        let update: string;
        this.order.received ? update = 'unreceived' : update = 'received';
        this.snackBar.open(`Order marked as ${update}.`, 'Dismiss', {
          panelClass: ['green-snackbar']});
        this.order.received = !this.order.received;
      } else {
        this.snackBar.open('Order failed to update.', 'Dismiss', {
          panelClass: ['red-snackbar']});
      }
    });
  }

  sortItemsByName() {
    this.order.cart.forEach((typeInCart: CartItemsByType) => {
      typeInCart.items.sort((before, after) => before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1);
    });
  }

  sortTypesByName() {
    this.order.cart.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
  }
}
