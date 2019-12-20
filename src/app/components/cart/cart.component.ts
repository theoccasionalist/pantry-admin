import { Component, OnInit, Input } from '@angular/core';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartItemsByType[];
  columns: string[] = ['column1', 'column2'];
  @Input() order: Order;
  panelOpenState = true;

  constructor() { }

  ngOnInit() {
    this.cart = this.order.cart;
  }
}
