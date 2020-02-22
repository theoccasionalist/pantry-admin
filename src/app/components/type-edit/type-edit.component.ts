import { Component, OnInit, OnDestroy } from '@angular/core';
import { TypeAddComponent } from '../type-add/type-add.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { TypeService } from 'src/app/services/type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { minMaxValidator } from '../product-add/product-add.component';
import { combineLatest, Subscription } from 'rxjs';
import { Type } from 'src/app/models/type.model';
import { Shop } from 'src/app/models/shop.model';
import { DataService } from 'src/app/services/data.service';

// NEED TO DOUBLE CHECK COMPONENT TO DELETE IN SHOP ITEMS WITHOUT BREAKING THINGS.
@Component({
  selector: 'app-type-edit',
  templateUrl: '../type-edit/type-edit.component.html',
  styleUrls: ['../type-add/type-add.component.css']
})
export class TypeEditComponent extends TypeAddComponent implements OnInit, OnDestroy {
  inShop = false;
  // private isSuperType = false;
  shop: Shop;

  constructor(private activatedRoute: ActivatedRoute, protected dataService: DataService, protected formBuilder: FormBuilder,
              protected typeService: TypeService, protected snackBar: MatSnackBar, protected router: Router) {
      super(dataService, formBuilder, snackBar, typeService, router);
    }

  ngOnInit() {
    this.subscription.add(
      combineLatest(
        this.dataService.getShop(),
        this.dataService.getTypes(),
        this.activatedRoute.params.pipe(
          switchMap(params => this.typeService.getTypeById(params.id)),
          take(1)
        ),
        this.dataService.getProducts(),
        ).subscribe(([shop, types, type, products]) => {
          this.shop = shop;
          this.types = types;
          this.type = type;
          this.products = products;
          this.typeForm = new FormGroup({
            typeName: new FormControl(this.type.typeName, Validators.required),
            superType: new FormControl(this.type.superTypeId)
          });
          this.initAvailableProducts();
          this.initProductsInType();
          this.setTypeSizeAmountForm();
          // this.setIsSuperType();
          this.setInShop();
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

  // NEED TO WRITE OUT UPDATE LOGIC AND REQUIREMENTS INVOLVING SUBTYPE AND SHOP UPDATES
  onUpdateClick() {
    if (this.typeForm.valid) {
      this.setTypeValues();
      this.typeService.updateType(this.type._id, this.type).subscribe((response: any) => {
        this.showResponseStatus(response.status);
      });
      // if (!this.inShop || this.type.products.length || this.isSuperType) {
      //   this.typeService.updateType(this.type._id, this.type).subscribe((response: any) => {
      //     this.showResponseStatus(response.status);
      //   });
      // } else {
      //   this.shop.shop = this.shop.shop.filter((type: Type) => this.type._id !== type._id);
      //   forkJoin(
      //     this.typeService.updateType(this.type._id, this.type),
      //     this.shopService.updateShop(this.shop._id, this.shop)
      //   ).subscribe((response: any[]) => {
      //     const responses = [];
      //     responses.push(response[0].status);
      //     responses.push(response[1].status);
      //     this.showResponseStatus(responses);
      //   });
      // }
    }
    this.router.navigate(['/pantry']);
  }

  private setInShop() {
    this.shop.shop.forEach((type: Type) => {
      if (type._id === this.type._id) {
        this.inShop = true;
      }
    });
  }

  // private setIsSuperType() {
  //   this.types.forEach((type: Type ) => {
  //     if (this.type._id === type.superTypeId) {
  //       this.isSuperType = true;
  //     }
  //   });
  // }

  private setTypeSizeAmountForm() {
    if (this.type.typeSizeAmount) {
      this.typeSizeAmount = new FormArray([]);
      this.type.typeSizeAmount.forEach(element => {
        this.typeSizeAmount.push(this.formBuilder.group({
          minFamSize: [element.minFamSize, Validators.required],
          maxFamSize: [element.maxFamSize, Validators.required],
          maxAmount: [element.maxAmount, Validators.required]
        },
        { validator: minMaxValidator }
        ));
        this.typeForm.addControl('typeSizeAmount', this.typeSizeAmount);
      });
    }
  }
}
