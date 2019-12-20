import { Component, OnInit, Inject } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TypeService } from 'src/app/services/type.service';
import { ShopService } from 'src/app/services/shop.service';
import { Shop } from 'src/app/models/shop.model';
import { Type } from 'src/app/models/type.model';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { isArray } from 'util';

@Component({
  selector: 'app-type-delete-modal',
  templateUrl: './type-delete-modal.component.html',
  styleUrls: ['./type-delete-modal.component.css']
})
export class TypeDeleteModalComponent implements OnInit {
  shop: Shop;
  types: Type[];

  constructor(public dialogRef: MatDialogRef<TypeDeleteModalComponent>, @Inject (MAT_DIALOG_DATA) public type: Type, private router: Router,
              private snackBar: MatSnackBar, private typeService: TypeService, private shopService: ShopService) { }

  ngOnInit() {
    forkJoin(
      this.typeService.getTypes(),
      this.shopService.getShop()
    ).subscribe((response: any[]) => {
      this.types = response[0];
      this.shop = response[1];
    });
  }

  private checkDeletedTypeInShop() {
    const inShop = this.shop.shop.some((type: Type) => type._id === this.type._id);
    return inShop;
  }

  private deleteType() {
    this.typeService.deleteType(this.type._id).subscribe((response: any) => this.showResponseStatus(response.status));
  }

  private deleteTypeInShop() {
    this.shop.shop = this.shop.shop.filter((type: Type) => type._id !== this.type._id);
    forkJoin(
      this.typeService.deleteType(this.type._id),
      this.shopService.updateShop(this.shop._id, this.shop)
    ).subscribe((response: any[]) => {
      const responses = [];
      responses.push(response[0].status);
      responses.push(response[1].status);
      this.showResponseStatus(responses);
    });
  }

  onCancelClick() {
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  // NEED TO WRITE OUT DELETE LOGIC AND REQUIRED UPDATE LOGIC!!!!!
  onProceedClick() {
    const inShop = this.checkDeletedTypeInShop();
    inShop ?
      this.deleteTypeInShop() :
      this.deleteType();
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  private showResponseStatus(status: any) {
    let failure: boolean;
    isArray(status) ?
      failure = status.some((singleStatus: number) => singleStatus === 400) :
      failure = status === 400;
    if (!failure) {
      this.snackBar.open(`${this.type.typeName} successfully deleted.`, 'Dismiss', {
        panelClass: ['green-snackbar']
      });
    } else {
      this.snackBar.open(`${this.type.typeName} failed to delete.`, 'Dismiss', {
        panelClass: ['red-snackbar']
      });
    }
  }
}
