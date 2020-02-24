import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-product-delete-modal',
  templateUrl: './product-delete-modal.component.html',
  styleUrls: ['./product-delete-modal.component.css']
})
export class ProductDeleteModalComponent implements OnInit {

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<ProductDeleteModalComponent>,
              @Inject (MAT_DIALOG_DATA) public product: Product, private productService: ProductService, 
              private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {}


  private deleteProduct() {
    this.productService.deleteProduct(this.product._id).subscribe((response: any) => {
      this.showResponseStatus(response.status);
    });
  }

  onCancelClick() {
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  onProceedClick() {
    this.deleteProduct();
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  private showResponseStatus(status: any) {
    if (status === 200) {
      this.snackBar.open(`${this.product.productName} successfully deleted.`, 'Dismiss', {
        panelClass: ['green-snackbar']
      });
    } else {
      this.snackBar.open(`${this.product.productName} failed to delete.`, 'Dismiss', {
        panelClass: ['red-snackbar']
      });
    }
    this.dataService.updateProducts();
    this.dataService.updateTypes();
    this.dataService.updateShop();
  }
}
