import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { Family } from 'src/app/models/family.model';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  family: Family;
  @Input() order: Order;
  panelOpenState = true;
  pickUpDate: string;
  @Input() sliceId: string;

  constructor() { }

  ngOnInit() {
    this.family = this.order.family;
    this.pickUpDate = this.order.pickUpDate;
  }

}
