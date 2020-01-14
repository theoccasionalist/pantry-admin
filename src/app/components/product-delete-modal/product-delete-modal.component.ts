import { Component, OnInit, Inject, ViewChild, Output, EventEmitter } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TypeService } from 'src/app/services/type.service';
import { ShopService } from 'src/app/services/shop.service';
import { Shop } from 'src/app/models/shop.model';
import { Type } from 'src/app/models/type.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { isArray } from 'util';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-product-delete-modal',
  templateUrl: './product-delete-modal.component.html',
  styleUrls: ['./product-delete-modal.component.css']
})
export class ProductDeleteModalComponent implements OnInit {
  shop: Shop;
  types: Type[];

  constructor(public dialogRef: MatDialogRef<ProductDeleteModalComponent>, @Inject (MAT_DIALOG_DATA) public product: Product,
              private refreshService: RefreshService, private productService: ProductService, private router: Router,
              private shopService: ShopService, private snackBar: MatSnackBar, private typeService: TypeService) { }

  ngOnInit() {
    forkJoin(
      this.typeService.getTypes(),
      this.shopService.getShop()
    ).subscribe((response: any[]) => {
      this.types = response[0];
      this.shop = response[1];
    });
  }

  private checkUpdatedTypeInShop(updatedType: Type) {
    const inShop = this.shop.shop.some((type: Type) => type._id === updatedType._id);
    return inShop;
  }

  private deleteProductInType(updatedType: Type) {
    forkJoin (
      this.productService.deleteProduct(this.product._id),
      this.typeService.updateType(updatedType._id, updatedType)
    ).subscribe((response: any[]) => {
      const responses = [];
      responses.push(response[0].status);
      responses.push(response[1].status);
      this.showResponseStatus(responses);
    });
  }

  private deleteProductNotInType() {
    this.productService.deleteProduct(this.product._id).subscribe((response: any) => {
      this.showResponseStatus(response.status);
    });
  }

  private deleteProductEmptyTypeInShop(updatedType: Type) {
    this.shop.shop = this.shop.shop.filter((type: Type) => type._id !== updatedType._id);
    forkJoin(
      this.shopService.updateShop(this.shop._id, this.shop),
      this.typeService.updateType(updatedType._id, updatedType),
      this.productService.deleteProduct(this.product._id)
    ).subscribe((response: any[]) => {
      const responses = [];
      responses.push(response[0].status);
      responses.push(response[1].status);
      responses.push(response[2].status);
      this.showResponseStatus(responses);
    });
  }

  private getUpdatedType() {
    let updateType: Type;
    this.types.forEach((type: Type) => {
      type.products.forEach((product: Product) => {
        if (product._id === this.product._id) {
          updateType = type;
          type.products = type.products.filter((deletedProduct: Product) => deletedProduct._id !== this.product._id);
        }
      });
    });
    return updateType;
  }

  onCancelClick() {
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  onProceedClick() {
    const updatedType = this.getUpdatedType();
    if (!updatedType) {
      this.deleteProductNotInType();
    } else {
      //  NEED TO WRITE THIS LOGIC DOWN AND GET IT STRAIGHT!!!!!!!!!!
      // needs a check that the type isn't a supertype and a check that removing it doesn't leave it with only one super type
      // if it is a supertype and has no products but there are at least two subtype with at least one product, --> delete product in type
      // if it is a supertype and has no products but one subtype with products remains, --> then remove supertypeid from subtype
      // if it is a subtype and has no products, then check that supertype has products or other subtypes --> remove from shop
      const inShop = this.checkUpdatedTypeInShop(updatedType);
      if (!updatedType.products.length && inShop) {
        this.deleteProductEmptyTypeInShop(updatedType);
      } else {
        this.deleteProductInType(updatedType);
      }
    }
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  private showResponseStatus(status: any) {
    let responseComplete = false;
    let failure: boolean;
    isArray(status) ?
      failure = status.some((singleStatus: number) => singleStatus === 400) :
      failure = status === 400;
    if (!failure) {
      this.snackBar.open(`${this.product.productName} successfully deleted.`, 'Dismiss', {
        panelClass: ['green-snackbar']
      });
      responseComplete = true;
    } else {
      this.snackBar.open(`${this.product.productName} failed to delete.`, 'Dismiss', {
        panelClass: ['red-snackbar']
      });
      responseComplete = true;
    }
    if (responseComplete) {
      this.refreshService.openPantryRefresh();
    }
  }
}
