import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderGridButtonsComponent } from '../order-grid-buttons/order-grid-buttons.component';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  columnDefs = [
    {headerName: 'First Name', field: 'firstName'},
    {headerName: 'Last Name', field: 'lastName'},
    {headerName: 'Family Size', field: 'familySize'},
    {headerName: 'Children', field: 'schoolChildren',
      comparator: (firstSchool, secondSchool) => this.schoolComparator(firstSchool, secondSchool)},
    {headerName: 'Infants', field: 'infants'},
    {headerName: 'Phone', field: 'phoneNumber'},
    {headerName: 'Email', field: 'emailAddress'},
    {headerName: 'Location', field: 'location'},
    {headerName: 'Pick Up', field: 'pickUpDate', width: 90},
    {headerName: 'Received', field: 'received', width: 90, sort: 'asc'},
    {headerName: '', field: 'action', filter: false, sortable: false, width: 150, cellRendererFramework: OrderGridButtonsComponent}
  ];
  defaultColDef = {
    filter: true,
    filterParams: {
      suppressAndOrCondition: true
    },
    resizable: true,
    sortable: true,
    width: 100
  };
  gridOptions: any;
  loading = true;
  orders: Order[];
  subscription = new Subscription();
  rowData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription.add(
        this.dataService.getOrders().subscribe((orders: Order[]) => {
        this.orders = orders;
        this.rowData = this.getFormattedFields();
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getFormattedFields() {
    const rowData = [];
    this.orders.forEach((order: Order) => {
      const rowEntry = {};
      const family  = order.family;
      Object.defineProperty(rowEntry, '_id', {value: order._id});
      Object.defineProperty(rowEntry, 'firstName', {value: family.firstName});
      Object.defineProperty(rowEntry, 'lastName', {value: family.lastName});
      Object.defineProperty(rowEntry, 'familySize', {value: order.family.familySize});
      family.schoolChildren ?
        Object.defineProperty(rowEntry, 'schoolChildren', {value: family.schoolChildren}) :
        Object.defineProperty(rowEntry, 'schoolChildren', {value: 'None'});
      family.infants ?
        Object.defineProperty(rowEntry, 'infants', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'infants', {value: 'No'});
      Object.defineProperty(rowEntry, 'phoneNumber', {value: family.phoneNumber});
      family.emailAddress ?
        Object.defineProperty(rowEntry, 'emailAddress', {value: family.emailAddress}) :
        Object.defineProperty(rowEntry, 'emailAddress', {value: '-'});
      family.referral ?
        Object.defineProperty(rowEntry, 'location', {value: 'CELC'}) :
        Object.defineProperty(rowEntry, 'location', {value: 'Broad St.'});
      Object.defineProperty(rowEntry, 'pickUpDate', {value: order.pickUpDate});
      order.received ?
        Object.defineProperty(rowEntry, 'received', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'received', {value: 'No'});
      rowData.push(rowEntry);
    });
    return rowData;
  }

  private schoolComparator(firstPoints: any, secondPoints: any) {
    if (isNaN(firstPoints)) {
      firstPoints = 0;
    }
    if (isNaN(secondPoints)) {
      secondPoints = 0;
    }
    return firstPoints > secondPoints ? 1 : -1;
  }

  updateOrders() {
    this.dataService.updateOrders();
  }
}
