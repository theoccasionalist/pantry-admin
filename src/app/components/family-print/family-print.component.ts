import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-family-print',
  templateUrl: './family-print.component.html',
  styleUrls: ['./family-print.component.css']
})
export class FamilyPrintComponent implements OnInit {
  @Input() order: Order;
  @Input() sliceId: string;

  constructor() { }

  ngOnInit() {
  }

}
