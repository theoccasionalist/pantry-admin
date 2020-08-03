import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { minMaxValidator } from '../product-add/product-add.component';
import { Type } from '../../models/type.model';
import { TypeService } from 'src/app/services/type.service';
import { Product } from 'src/app/models/product.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { combineLatest, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.css']
})

export class TypeAddComponent implements OnInit, OnDestroy {
  availableProducts: Product[] = [];
  availableSubTypes: Type[] = [];
  currentTypeName: string;
  deletedOrMoved = false;
  inShop = false;
  limitPanelOpenState = false;
  loading = true;
  newSubTypes: Type[] = [];
  products: Product[];
  productPanelOpenState = false;
  productsInType: Product[] = [];
  requiredError = 'This field is required.';
  enableTypeTracking: FormControl;
  subscription = new Subscription();
  superTypeName: string;
  type = new Type();
  typeEdit = false;
  typeForm = new FormGroup({
    typeName: new FormControl('', Validators.required),
    typeComment: new FormControl('')
  });
  types: Type[];
  typeLimitsForm: FormGroup;
  typeLimitsFormOpen = false;
  typeSizeAmount: FormArray;

  constructor(protected dataService: DataService, protected formBuilder: FormBuilder, protected snackBar: MatSnackBar,
              protected typeService: TypeService, protected router: Router) { }

  ngOnInit() {
    this.subscription.add(
      combineLatest([
        this.dataService.getProducts(),
        this.dataService.getTypes()
      ]).subscribe(([products, types]) => {
        this.products = products;
        this.types = types;
        this.initAvailableProducts();
        this.loading = !this.loading;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addSizeAmount() {
    this.typeSizeAmount.push(this.formBuilder.group({
      minFamSize: ['', [Validators.required]],
      maxFamSize: ['', Validators.required],
      maxAmount: ['', Validators.required]
    }, { validator: minMaxValidator }
    ));
  }

  deleteSizeAmount(index: number) {
    this.deletedOrMoved = true;
    this.typeSizeAmount.removeAt(index);
    if (!this.typeSizeAmount.length) {
      this.typeForm.removeControl('typeLimitsForm');
      this.typeLimitsFormOpen = false;
    }
  }

  dropProduct(event: CdkDragDrop<Product[]>) {
    this.deletedOrMoved = true;
    event.previousContainer === event.container ?
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex) :
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    this.sortProductsByName(this.availableProducts);
    this.sortProductsByName(this.productsInType);
  }

  initAvailableProducts() {
    const unavailableProducts: Product[] = [];
    this.types.forEach(type => type.products.forEach(product => unavailableProducts.push(product)));
    this.products.forEach(product => {
      if (!unavailableProducts.some(unavailable => unavailable._id === product._id)) {
        this.availableProducts.push(product);
      }
    });
    this.sortProductsByName(this.availableProducts);
  }

  initTypeLimitsForm() {
    this.typeLimitsFormOpen = true;
    this.typeLimitsForm = new FormGroup({});
    this.enableTypeTracking = new FormControl(true);
    this.typeLimitsForm.addControl('enableTypeTracking', this.enableTypeTracking);
    this.typeSizeAmount = new FormArray([]);
    this.addSizeAmount();
    this.typeLimitsForm.addControl('typeSizeAmount', this.typeSizeAmount);
    this.typeForm.addControl('typeLimitsForm', this.typeLimitsForm);
  }

  onCancelClick() {
    this.router.navigate([`/pantry`]);
  }

  onSaveClick() {
    if (this.typeForm.valid) {
      this.setTypeValues();
      if (!this.typeEdit) {
        this.typeService.addType(this.type).subscribe((response: any) => this.showResponseStatus(response.status));
      } else {
        this.migrateTypeSizeAmount();
        this.removeFromSuperType();
        this.typeService.updateType(this.type._id, this.type).subscribe((response: any) => {
          this.showResponseStatus(response.status);
          this.dataService.updateTypes();
          this.dataService.updateShop();
          this.dataService.updateProducts();
        });
      }
    }
    this.router.navigate([`/pantry`]);
  }

  removeFromSuperType() {
    if (this.type.superTypeId && (!this.type.typeLimits || (this.type.typeLimits && !this.type.typeLimits.enableTypeTracking))) {
      this.type.superTypeId = undefined;
    }
  }

  setTypeValues() {
    this.type.typeName = this.typeForm.get('typeName').value;
    this.typeForm.get('typeComment').value.trim() !== '' ?
      this.type.typeComment = this.typeForm.get('typeComment').value :
      this.type.typeComment = undefined;
    this.productsInType.length ?
      this.type.products = this.productsInType :
      this.type.products = [];
    if (this.typeLimitsForm && this.typeSizeAmount.length) {
      const addTypeLimits = {
        typeLimits: {
          enableTypeTracking: this.typeLimitsForm.get('enableTypeTracking').value,
          typeSizeAmount:  this.typeLimitsForm.get('typeSizeAmount').value
        }
      };
      this.type.typeLimits = addTypeLimits.typeLimits;
    } else {
      this.type.typeLimits = undefined;
    }
  }

  showResponseStatus(status: any) {
    if (status === 200) {
      this.snackBar.open(`${this.type.typeName} successfully updated.`, 'Dismiss', {
        panelClass: ['green-snackbar']
      });
    } else {
      this.snackBar.open(`${this.type.typeName} failed to update.`, 'Dismiss', {
        panelClass: ['red-snackbar']
      });
    }
    this.dataService.updateTypes();
    this.dataService.updateProducts();
    this.dataService.updateShop();
  }

  sortProductsByName(dragDropCard: Product[]) {
    dragDropCard.sort((before, after) => before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1);
  }

  // This is temporary.
  // Take it out when we decide about migrating db or not.
  private migrateTypeSizeAmount() {
    if (this.type.typeSizeAmount) {
      const addTypeLimits = {
        typeLimits: {
          enableTypeTracking: true,
          typeSizeAmount:  this.type.typeSizeAmount
        }
      };
      this.type.typeLimits = addTypeLimits.typeLimits;
      this.type.typeSizeAmount = undefined;
    }
  }
}
