import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/services/type.service';
import { Type } from 'src/app/models/type.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ShopType } from 'src/app/models/shop-type.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-sub-type-edit',
  templateUrl: './sub-type-edit.component.html',
  styleUrls: ['./sub-type-edit.component.css']
})
export class SubTypeEditComponent implements OnInit {
  loading = true;
  possibleSubs: ShopType[] = [];
  possibleSupers: ShopType[] = [];
  responses: number[] = [];
  types: Type[];

  constructor(private refreshService: RefreshService, private router: Router, private snackBar: MatSnackBar,
              private typeService: TypeService) { }

  ngOnInit() {
    this.typeService.getTypes().subscribe(types => {
      this.types = types;
      this.initDragDropArrays();
      this.initDragDropValues();
      this.loading = false;
    });
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
    } else if (typeToMove._id !== newSuperType._id) {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        this.dropIntoSupersSetArrayValues(typeToMove);
    } else {
        this.snackBar.open('Cannot put a type inside itself.', `Dismiss`, {
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

  private initDragDropArrays() {
    this.types.forEach(type => {
      const emptyArray: ShopType[] = [];
      this.possibleSubs.push({_id: type._id, typeName: type.typeName, subTypes: emptyArray, products: type.products});
      this.possibleSupers.push({_id: type._id, typeName: type.typeName, subTypes: emptyArray, products: type.products});
    });
  }

  private initDragDropValues() {
    this.types.forEach((type: Type) => {
      if (!type.products.length) {
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
    this.sortTypesByName(this.possibleSupers);
  }

  private showResponseStatus() {
    let responseComplete = false;
    if (this.responses.some(response => response !== 200)) {
      this.snackBar.open('Types update failed.', 'Dismiss', {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
      responseComplete = true;
    } else {
      this.snackBar.open('Types updated successfully', 'Dismiss', {
        duration: 2000,
        panelClass: ['green-snackbar']
      });
      responseComplete = true;
    }
    if (responseComplete) {
      this.refreshService.openPantryRefresh();
    }
  }

  sortTypesByName(dragDropArray: ShopType[]) {
    dragDropArray.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
  }

  onCancelClick() {
    this.router.navigate([`/pantry`]);
  }

  onSaveClick() {
    this.onSaveClickRemoveSuperTypes();
    this.onSaveClickUpdateSuperTypes();
    this.showResponseStatus();
    this.router.navigate([`/pantry`]);
  }

  private onSaveClickRemoveSuperTypes() {
    const typeIdsToRemove: string[] = [];
    this.possibleSupers.forEach((superType: ShopType) => {
      typeIdsToRemove.push(superType._id);
    });
    this.typeService.removeSuperTypeIdMany(typeIdsToRemove).subscribe((response: any) => this.responses.push(response.status));
  }

  private onSaveClickUpdateSuperTypes() {
    this.possibleSupers.forEach((superType: ShopType) => {
      const typeIdsToUpdate: string[] = [];
      if (superType.subTypes.length) {
        superType.subTypes.forEach((subType: ShopType) => {
          typeIdsToUpdate.push(subType._id);
        });
        this.typeService.updateSuperTypeIdMany(superType._id, typeIdsToUpdate)
          .subscribe((response: any) => this.responses.push(response.status));
      }
    });
  }
}
