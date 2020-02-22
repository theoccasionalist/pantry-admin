import { Component, OnInit, OnDestroy } from '@angular/core';
import { Type } from 'src/app/models/type.model';
import { ShopService } from 'src/app/services/shop.service';
import { TypeService } from 'src/app/services/type.service';
import { forkJoin, Subscription, combineLatest, Subject, zip, concat } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ShopType } from 'src/app/models/shop-type.model';
import { Shop } from 'src/app/models/shop.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { take, tap, withLatestFrom, debounceTime, mergeMap, switchMap, first, takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit, OnDestroy {
  availableTypes: ShopType[] = [];
  loading = true;
  shop: Shop = undefined;
  private subscription = new Subscription();
  types: Type[] = [];
  typesInShop: ShopType[] = [];

  shopListener = new Subject();
  typesListener = new Subject();

  constructor(private dataService: DataService, private snackBar: MatSnackBar, private router: Router, private shopService: ShopService,
              private typeService: TypeService) { }

  ngOnInit() {
    let n = 0;
    this.subscription.add(
      combineLatest(
        this.dataService.getShop(),
        this.dataService.getTypes()
      ).subscribe(([shop, types]) => {
    this.typesInShop.forEach((typeInShop: ShopType) => console.log(typeInShop.subTypes));
    console.log(shop);
    this.shop = shop;
    this.typesInShop = this.shop.shop;
    this.types = types;
    this.setInShopSubTypes();
    this.setAvailableSuperTypes();
    this.setAvailableSubTypes();
    this.removeProductLessType();
    this.sortTypesByName(this.availableTypes);
    this.sortTypesByName(this.typesInShop);
    this.loading = false;
    }));
  }

  ngOnDestroy() {
    console.log('edit destroyed');
    this.subscription.unsubscribe();
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
      } else {
        this.snackBar.open(`Shop failed to update.`, 'Dismiss', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
      }
      this.router.navigate([`/pantry`]);
      this.dataService.updateShop();
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
          if (!availableType.subTypes) {
            availableType.subTypes = [];
          }
          if (!availableType.subTypes.some((subType: Type) => subType._id === type._id)) {
            availableType.subTypes.push(type);
          }
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
    const subTypesInShop: ShopType[] = [];
    this.typesInShop.forEach((typeInShop: ShopType) => {
      if (typeInShop.superTypeId) {
        subTypesInShop.push(typeInShop);
        this.typesInShop = this.typesInShop.filter((type: ShopType) => type._id !== typeInShop._id);
      }
    });
    this.setInShopSubTypesHelper(subTypesInShop);
  }

  private setInShopSubTypesHelper(subTypesInShop: ShopType[]) {
    console.log('I am called');
    console.log(subTypesInShop);
    // this.typesInShop.forEach((superType: ShopType) => {
    subTypesInShop.forEach((subType: ShopType) => {
      const superType = this.typesInShop.find((typeInShop: Type) => typeInShop._id === subType.superTypeId);
      console.log(superType.subTypes);
      if (!superType.subTypes) {
        superType.subTypes = [];
        superType.subTypes.push(subType);
      } else if (!superType.subTypes.some((subTypeAdd: Type) => subTypeAdd._id === subType._id)) {
        superType.subTypes.push(subType);
    }
    });
    // });
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
