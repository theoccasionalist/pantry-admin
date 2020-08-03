import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypeService } from 'src/app/services/type.service';
import { Type } from 'src/app/models/type.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ShopType } from 'src/app/models/shop-type.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription, forkJoin, from as ObservableFrom, combineLatest } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Shop } from 'src/app/models/shop.model';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'app-sub-type-edit',
  templateUrl: './sub-type-edit.component.html',
  styleUrls: ['./sub-type-edit.component.css']
})
export class SubTypeEditComponent implements OnInit, OnDestroy {
  loading = true;
  possibleSubs: ShopType[];
  possibleSupers: ShopType[];
  shop: Shop;
  private subscription = new Subscription();
  types: Type[];

  constructor(private dataService: DataService, private router: Router, private snackBar: MatSnackBar,
              private typeService: TypeService) { }

  ngOnInit() {
    this.subscription.add(
      combineLatest([
        this.dataService.getShop(),
        this.dataService.getTypes(),
      ]).subscribe(([shop, types]) => {
          this.shop = shop;
          this.initComponentVariables(shop);
          this.types = types;
          this.initDragDropArrays();
          this.initDragDropValues();
          this.sortTypesByName(this.possibleSubs);
          this.sortTypesByName(this.possibleSupers);
          this.possibleSupers.forEach((superType: ShopType) => {
            this.sortTypesByName(superType.subTypes);
          });
          this.loading = false;
        })
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  dropIntoSubs(event: CdkDragDrop<ShopType[]>) {
    const superTypeToAdd: ShopType = event.previousContainer.data[event.previousIndex];
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.dropIntoSubsSetArrayValues(superTypeToAdd);
    }
    this.sortTypesByName(this.possibleSubs);
    this.sortTypesByName(this.possibleSupers);
  }

  private dropIntoSubsSetArrayValues(superTypeToAdd: ShopType) {
    this.possibleSupers.push(superTypeToAdd);
    this.possibleSupers.forEach((superType: ShopType) => {
      if (!superType.subTypes.length  && !this.possibleSubs.some((subType: ShopType) => subType._id === superType._id)
       && superType.products.length) {
        this.possibleSubs.push(superType);
      }
    });
  }

  dropIntoSupers(event: CdkDragDrop<ShopType[]>, newSuperType: ShopType) {
    const typeToMove: ShopType = event.previousContainer.data[event.previousIndex];
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (typeToMove._id !== newSuperType._id  &&
      (this.getInShopStatus(typeToMove) && this.getInShopStatus(newSuperType) ||
      (!this.getInShopStatus(typeToMove) && !this.getInShopStatus(newSuperType)))) {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        this.dropIntoSupersSetArrayValues(typeToMove);
    } else if (typeToMove._id === newSuperType._id) {
        this.snackBar.open('Cannot put a type within itself.', `Dismiss`, {
        panelClass: ['red-snackbar']
      });
    } else {
      this.snackBar.open('Both the super-type and sub-type must currently be in the shop.', `Dismiss`, {
        duration: 4000,
        panelClass: ['red-snackbar']
      });
    }
    this.sortTypesByName(this.possibleSupers);
    this.possibleSupers.forEach((superType: ShopType) => {
      this.sortTypesByName(superType.subTypes);
    });
  }

  private dropIntoSupersSetArrayValues(typeToMove: ShopType) {
    this.possibleSupers = this.possibleSupers.filter((superTypeToRemove: ShopType) => superTypeToRemove._id !== typeToMove._id);
    this.possibleSupers.forEach((superType: ShopType) => {
      if (superType.subTypes.length || !superType.products.length) {
        this.possibleSubs = this.possibleSubs.filter((subType: ShopType) => subType._id !== superType._id);
      }
      if (!superType.subTypes.length  && !this.possibleSubs.some((subType: ShopType) => subType._id === superType._id)
      && superType.products.length) {
        this.possibleSubs.push(superType);
      }
    });
  }

  getInShopStatus(typeToCheck: Type) {
    let inShop = false;
    this.shop.shop.forEach((type: Type) => {
      if (type._id === typeToCheck._id) {
        inShop = true;
      }
    });
    return inShop;
  }

  initComponentVariables(shop: Shop) {
    this.possibleSubs = [];
    this.possibleSupers = [];
    const shopClone = cloneDeep(shop);
    this.shop = shopClone;
  }

  private initDragDropArrays() {
    this.types.forEach(type => {
      const emptyArray: ShopType[] = [];
      this.possibleSubs.push({_id: type._id, typeName: type.typeName, subTypes: emptyArray, products: type.products});
      this.possibleSupers.push({_id: type._id, typeName: type.typeName, subTypes: emptyArray, products: type.products});
    });
  }

  private initDragDropValues() {
    this.types.forEach((type: Type) => {
      if (!type.products.length || !type.typeLimits || (type.typeLimits && !type.typeLimits.enableTypeTracking)) {
        this.possibleSubs = this.possibleSubs.filter((emptyType: ShopType) => type._id !== emptyType._id);
      }
    });
    this.possibleSupers.forEach((superType: ShopType) => {
      this.types.forEach((type: Type) => {
        if (type.superTypeId === superType._id) {
          const newSubType = this.possibleSubs.find((subType: ShopType) => subType._id === type._id);
          superType.subTypes.push(newSubType);
          this.possibleSubs = this.possibleSubs.filter((subType: ShopType) => subType._id !== newSubType._id);
          this.possibleSubs = this.possibleSubs.filter((subType: ShopType) => subType._id !== superType._id);
          this.possibleSupers = this.possibleSupers.filter((superTypeRemove: ShopType) => superTypeRemove._id !== newSubType._id);
        }
      });
    });
  }

  private showResponseStatus(status: number) {
    if (status === 200) {
      this.snackBar.open('Types updated successfully', 'Dismiss', {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
    } else {
      this.snackBar.open('Types update failed.', 'Dismiss', {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
    }
    this.dataService.updateTypes();
    this.dataService.updateShop();
    this.dataService.updateProducts();
  }

  sortTypesByName(dragDropArray: ShopType[]) {
    dragDropArray.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
  }

  onCancelClick() {
    this.router.navigate([`/pantry`]);
  }

  onSaveClick() {
    this.loading = true;
    if (this.getTypeIdsToUpdate().length) {
      forkJoin([
        this.typeService.removeSuperTypeIdMany(this.getTypeIdsToRemove()),
        ObservableFrom(this.getTypeIdsToUpdate()).pipe(
          concatMap((update: {
            superTypeId: string,
            updateIds: string[]
          }) => this.typeService.updateSuperTypeIdMany(update.superTypeId, update.updateIds)))
        ]).subscribe(([remove, update]) => {
          let response: number;
          const typedRemove: any = remove;
          const typedUpdate: any = update;
          typedRemove.status === 200 && typedUpdate.status === 200 ? response = 200 : response = 400;
          this.showResponseStatus(response);
          this.router.navigate([`/pantry`]);

        });
    } else {
      this.typeService.removeSuperTypeIdMany(this.getTypeIdsToRemove()).subscribe((response: any) => {
        this.showResponseStatus(response.status);
        this.router.navigate([`/pantry`]);
      });
    }
  }

  private getTypeIdsToRemove(): string[] {
    const typeIdsToRemove: string[] = [];
    this.possibleSupers.forEach((superType: ShopType) => {
      typeIdsToRemove.push(superType._id);
    });
    return typeIdsToRemove;
  }

  private getTypeIdsToUpdate(): any[] {
    const updateObjects: {
      superTypeId: string,
      updateIds: string[]
    }[] = [];
    this.possibleSupers.forEach((superType: ShopType) => {
      if (superType.subTypes.length) {
        const idsToUpdate: string[] = [];
        superType.subTypes.forEach((subType: ShopType) => {
          idsToUpdate.push(subType._id);
        });
        updateObjects.push({superTypeId: superType._id, updateIds: idsToUpdate});
      }
    });
    return updateObjects;
  }
}
