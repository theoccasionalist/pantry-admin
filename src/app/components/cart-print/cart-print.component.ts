import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-cart-print',
  templateUrl: './cart-print.component.html',
  styleUrls: ['./cart-print.component.css']
})
export class CartPrintComponent implements OnInit {
  columns: string[] = ['column1', 'column2'];
  @Input() order: Order;
  @Input() sliceId: string;

  constructor() { }

  ngOnInit() {
  }

}
