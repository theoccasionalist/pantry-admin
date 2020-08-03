import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypeAddComponent } from '../type-add/type-add.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { TypeService } from 'src/app/services/type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { minMaxValidator } from '../product-add/product-add.component';
import { combineLatest } from 'rxjs';
import { Type } from 'src/app/models/type.model';
import { Shop } from 'src/app/models/shop.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-type-edit',
  templateUrl: '../type-add/type-add.component.html',
  styleUrls: ['../type-add/type-add.component.css']
})
export class TypeEditComponent extends TypeAddComponent implements OnInit, OnDestroy {
  shop: Shop;

  constructor(private activatedRoute: ActivatedRoute, protected dataService: DataService, protected formBuilder: FormBuilder,
              protected typeService: TypeService, protected snackBar: MatSnackBar, protected router: Router) {
      super(dataService, formBuilder, snackBar, typeService, router);
    }

  ngOnInit() {
    this.typeEdit = true;
    this.subscription.add(
      combineLatest([
        this.dataService.getShop(),
        this.dataService.getTypes(),
        this.activatedRoute.params.pipe(
          switchMap(params => this.dataService.getTypeById(params.id)),
          take(1)
        ),
        this.dataService.getProducts(),
      ]).subscribe(([shop, types, type, products]) => {
          this.rerouteOnEmptyType(type);
          this.shop = shop;
          this.types = types;
          this.type = type;
          this.products = products;
          this.typeForm = new FormGroup({
            typeName: new FormControl(this.type.typeName, Validators.required),
            typeComment: new FormControl(this.initEditTypeCommentForm()),
          });
          this.initAvailableProducts();
          this.initProductsInType();
          this.initEditTypeLimitsForm();
          this.setInShop();
          this.setSuperTypeName();
          this.loading = !this.loading;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initProductsInType() {
    this.productsInType = this.type.products;
  }

  private initEditTypeCommentForm(): string {
    if (this.type.typeComment) {
      return this.type.typeComment;
    } else {
      return '';
    }
  }

  private initEditTypeLimitsForm() {
    if (this.type.typeLimits) {
      this.typeLimitsFormOpen = true;
      this.typeLimitsForm = new FormGroup({});
      this.enableTypeTracking = new FormControl(this.type.typeLimits.enableTypeTracking);
      this.typeLimitsForm.addControl('enableTypeTracking', this.enableTypeTracking);
      this.typeSizeAmount = new FormArray([]);
      this.type.typeLimits.typeSizeAmount.forEach(element => {
        this.typeSizeAmount.push(this.formBuilder.group({
          minFamSize: [element.minFamSize, Validators.required],
          maxFamSize: [element.maxFamSize, Validators.required],
          maxAmount: [element.maxAmount, Validators.required]
        },
        { validator: minMaxValidator }
        ));
        this.typeLimitsForm.addControl('typeSizeAmount', this.typeSizeAmount);
      });
      this.typeForm.addControl('typeLimitsForm', this.typeLimitsForm);
    }
  }

  private setInShop() {
    this.shop.shop.forEach((type: Type) => {
      if (type._id === this.type._id) {
        this.inShop = true;
      }
    });
  }

  private setSuperTypeName() {
    if (this.type.superTypeId) {
      this.superTypeName = this.types.find((superType) => superType._id === this.type.superTypeId).typeName;
    }
  }

  private rerouteOnEmptyType(type: any) {
    if (type === undefined || Object.entries(type).length === 0 && type.constructor === Object) {
      this.snackBar.open('Type not found. Please try again.', 'Dismiss', {
        panelClass: ['red-snackbar']
      });
      this.router.navigate([`/pantry`]);
    }
  }
}
