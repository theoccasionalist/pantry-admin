import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderDeleteModalComponent } from '../order-delete-modal/order-delete-modal.component';

@Component({
  selector: 'app-order-grid-buttons',
  templateUrl: './order-grid-buttons.component.html',
  styleUrls: ['./order-grid-buttons.component.css']
})
export class OrderGridButtonsComponent implements OnInit {
  data: any;
  params: any;

  constructor(private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

  agInit(params) {
    this.data =  params.data;
  }

  ngOnInit() {
  }

  onDeleteClick() {
    this.data.received === 'Yes' ?
      this.dialog.open(OrderDeleteModalComponent, {
      data: this.data,
      disableClose: true,
      panelClass: ['delete-dialog-container'],
      width: '34rem'})
    :
      this.snackBar.open('Orders must be marked as received before deleting.', 'Dismiss', {
        panelClass: ['red-snackbar']});
  }

  onViewClick() {
    this.router.navigate(['/order', this.data._id]);
  }

}
