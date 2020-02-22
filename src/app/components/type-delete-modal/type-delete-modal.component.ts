import { Component, OnInit, Inject } from '@angular/core';
import { forkJoin } from 'rxjs';
import { TypeService } from 'src/app/services/type.service';
import { ShopService } from 'src/app/services/shop.service';
import { Shop } from 'src/app/models/shop.model';
import { Type } from 'src/app/models/type.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { isArray } from 'util';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-type-delete-modal',
  templateUrl: './type-delete-modal.component.html',
  styleUrls: ['./type-delete-modal.component.css']
})
export class TypeDeleteModalComponent implements OnInit {
  shop: Shop;
  types: Type[];

  constructor(public dialogRef: MatDialogRef<TypeDeleteModalComponent>, @Inject (MAT_DIALOG_DATA) public type: Type,
              private dataService: DataService, private router: Router, private snackBar: MatSnackBar,
              private typeService: TypeService, private shopService: ShopService) { }

  ngOnInit() {
    forkJoin(
      this.typeService.getTypes(),
      this.shopService.getShop()
    ).subscribe(([types, shop]) => {
      this.types = types;
      this.shop = shop;
    });
  }

  private deleteType() {
    this.typeService.deleteType(this.type._id).subscribe((response: any) => this.showResponseStatus(response.status));
  }

  onCancelClick() {
    this.dialogRef.close();
    this.router.navigate([`/pantry`]);
  }

  onProceedClick() {
    this.deleteType();
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
      this.snackBar.open(`${this.type.typeName} successfully deleted.`, 'Dismiss', {
        panelClass: ['green-snackbar']
      });
      responseComplete = true;
    } else {
      this.snackBar.open(`${this.type.typeName} failed to delete.`, 'Dismiss', {
        panelClass: ['red-snackbar']
      });
      responseComplete = true;
    }
    if (responseComplete) {
      this.dataService.updateTypes();
    }
  }
}
