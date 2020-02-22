import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { minMaxValidator } from '../product-add/product-add.component';
import { Type } from '../../models/type.model';
import { TypeService } from 'src/app/services/type.service';
import { Product } from 'src/app/models/product.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { combineLatest, Subscription } from 'rxjs';
import { isArray } from 'util';
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
  loading = true;
  newSubTypes: Type[] = [];
  products: Product[];
  productsInType: Product[] = [];
  requiredError = 'This field is required.';
  subscription = new Subscription();
  superTypeOptions: Type[] = [];
  type = new Type();
  typeForm = new FormGroup({
    typeName: new FormControl('', Validators.required),
    superType: new FormControl('')
  });
  types: Type[];
  typeSizeAmount: FormArray;

  constructor(protected dataService: DataService, protected formBuilder: FormBuilder, protected snackBar: MatSnackBar,
              protected typeService: TypeService, protected router: Router) { }

  ngOnInit() {
    this.subscription.add(
      combineLatest(
        this.dataService.getProducts(),
        this.dataService.getTypes()
      ).subscribe(([products, types]) => {
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
      this.typeForm.removeControl('typeSizeAmount');
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

  initSizeAmount() {
    this.typeSizeAmount = new FormArray([]);
    this.addSizeAmount();
    this.typeForm.addControl('typeSizeAmount', this.typeSizeAmount);
  }

  onChangeTypeName() {
    this.currentTypeName = this.typeForm.get('typeName').value;
  }

  onAddClick() {
    if (this.typeForm.valid) {
      this.setTypeValues();
      this.typeService.addType(this.type).subscribe((response: any) => this.showResponseStatus(response.status));
    }
    this.router.navigate([`/pantry`]);
  }

  onCancelClick() {
    this.router.navigate([`/pantry`]);
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

  setTypeValues() {
    this.type.typeName = this.typeForm.get('typeName').value;
    if (this.typeForm.get('typeSizeAmount') && this.typeSizeAmount.length) {
      this.type.typeSizeAmount = this.typeForm.get('typeSizeAmount').value;
    }
    this.productsInType.length ?
      this.type.products = this.productsInType :
      this.type.products = [];
    if (this.typeForm.get('superType').value) {
      this.type.superTypeId = this.typeForm.get('superType').value;
    }
  }

  showResponseStatus(status: any) {
    let failure: boolean;
    let responseComplete = false;
    isArray(status) ?
      failure = status.some((singleStatus: number) => singleStatus === 400) :
      failure = status === 400;
    if (!failure) {
      this.snackBar.open(`${this.type.typeName} successfully updated.`, 'Dismiss', {
        panelClass: ['green-snackbar']
      });
      responseComplete = true;
    } else {
      this.snackBar.open(`${this.type.typeName} failed to update.`, 'Dismiss', {
        panelClass: ['red-snackbar']
      });
      responseComplete = true;
    }
    if (responseComplete) {
      this.dataService.updateTypes();
    }
  }

  sortProductsByName(dragDropCard: Product[]) {
    dragDropCard.sort((before, after) => before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1);
  }
}
