import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Order } from 'src/app/models/order.model';
import { RefreshService } from 'src/app/services/refresh.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-delete-modal',
  templateUrl: './order-delete-modal.component.html',
  styleUrls: ['./order-delete-modal.component.css']
})
export class OrderDeleteModalComponent implements OnInit {
  sliceId: string;

  constructor(public dialogRef: MatDialogRef<OrderDeleteModalComponent>, @Inject (MAT_DIALOG_DATA) public order: Order,
              private orderService: OrderService, private refreshService: RefreshService, private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.sliceId = this.order._id.slice(-5);
  }

  onProceedClick() {
    this.orderService.deleteOrder(this.order._id).subscribe((response: any) => {
      if (response.status === 200) {
        this.snackBar.open(`Order Id ${this.sliceId} successfully deleted.`, 'Dismiss', {
          panelClass: ['green-snackbar']
        });
      } else {
        this.snackBar.open(`Order Id ${this.sliceId} failed to delete.`, 'Dismiss', {
          panelClass: ['red-snackbar']
        });
      }
      this.refreshService.openOrderRefresh();
    });
    this.dialogRef.close();
    this.router.navigate(['/orders']);
  }

  onCancelClick() {
    this.dialogRef.close();
    this.router.navigate([`/orders`]);
  }
}
