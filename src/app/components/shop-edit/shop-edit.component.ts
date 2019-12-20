import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type.model';
import { ShopService } from 'src/app/services/shop.service';
import { TypeService } from 'src/app/services/type.service';
import { forkJoin } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ShopType } from 'src/app/models/shop-type.model';
import { Shop } from 'src/app/models/shop.model';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {
  availableTypes: ShopType[] = [];
  loading = true;
  shop: Shop;
  types: Type[] = [];
  typesInShop: ShopType[];

  constructor(private snackBar: MatSnackBar, private router: Router, private shopService: ShopService, private typeService: TypeService) { }

  ngOnInit() {
    forkJoin(
      this.shopService.getShop(),
      this.typeService.getTypes()
    ).subscribe(response => {
      this.shop = response[0];
      this.typesInShop = this.shop.shop;
      this.setInShopSubTypes();
      this.types = response[1];
      this.setAvailableSuperTypes();
      this.setAvailableSubTypes();
      this.removeProductLessType();
      this.sortTypesByName(this.availableTypes);
      this.sortTypesByName(this.typesInShop);
      this.loading = false;
    });
  }

  dropType(event: CdkDragDrop<Type[]>) {
    event.previousContainer === event.container ?
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex) :
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    this.sortTypesByName(this.availableTypes);
    this.sortTypesByName(this.typesInShop);
  }

  onCancelClick() {
    this.router.navigate(['/pantry']);
  }

  onSaveClick() {
    this.unwrapSubTypes();
    this.shop.shop = this.typesInShop;
    this.shopService.updateShop(this.shop._id, this.shop).subscribe((response: any) => {
      if (response.status === 200) {
        this.snackBar.open(`Shop successfully updated.`, 'Dismiss', {
          duration: 2000,
          panelClass: ['green-snackbar']
        });
        this.router.navigate([`/pantry`]);
      } else {
        this.snackBar.open(`Shop failed to update.`, 'Dismiss', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
        this.router.navigate([`/pantry`]);
      }
    });
  }

  private removeProductLessType() {
    this.availableTypes.forEach((availableType: ShopType) => {
      if (!availableType.products.length && !availableType.subTypes) {
        this.availableTypes = this.availableTypes.filter((productLessType: ShopType) => availableType._id !== productLessType._id);
      }
    });
  }

  private setAvailableSubTypes() {
    this.types.forEach((type: Type) => {
      this.availableTypes.forEach((availableType: ShopType) => {
        if (availableType._id === type.superTypeId) {
          availableType.subTypes = [];
          availableType.subTypes.push(type);
        }
      });
    });
  }

  private setAvailableSuperTypes() {
    this.types.forEach((type: Type) => {
      if (!this.typesInShop.some((typeInShop: ShopType) => typeInShop._id === type._id) && !type.superTypeId) {
          this.availableTypes.push(type);
      }
    });
  }

  private setInShopSubTypes() {
    this.typesInShop.forEach((subType: ShopType) => {
      if (subType.superTypeId) {
        this.typesInShop.forEach((superType: ShopType) => {
          if (subType.superTypeId === superType._id) {
            superType.subTypes = [];
            superType.subTypes.push(subType);
            this.typesInShop = this.typesInShop.filter((typesInShop: ShopType) => typesInShop._id !== subType._id);
          }
        });
      }
    });
  }

  private sortTypesByName(shopTypes: ShopType[]) {
    shopTypes.sort((beforeType: Type, afterType: Type) => {
      return beforeType.typeName > afterType.typeName ? 1 : -1;
    });
    shopTypes.forEach((shopType: ShopType) => {
      if (shopType.subTypes) {
        shopType.subTypes.sort((beforeSubType: Type, afterSubType: Type) => {
          return beforeSubType.typeName > afterSubType.typeName ? 1 : -1;
        });
      }
    });
  }

  private unwrapSubTypes() {
    this.typesInShop.forEach((typeInShop: ShopType) => {
      if (typeInShop.subTypes) {
        typeInShop.subTypes.forEach((subType: ShopType) => {
          this.typesInShop.push(subType);
        });
        typeInShop.subTypes = undefined;
      }
    });
  }
}
