import { Component, OnInit } from '@angular/core';
import { TypeAddComponent } from '../type-add/type-add.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { TypeService } from 'src/app/services/type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { minMaxValidator } from '../product-add/product-add.component';
import { forkJoin } from 'rxjs';
import { Type } from 'src/app/models/type.model';
import { ShopService } from 'src/app/services/shop.service';
import { Shop } from 'src/app/models/shop.model';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-type-edit',
  templateUrl: '../type-edit/type-edit.component.html',
  styleUrls: ['../type-add/type-add.component.css']
})
export class TypeEditComponent extends TypeAddComponent implements OnInit {
  inShop = false;
  isSuperType = false;
  shop: Shop;

  constructor(private activatedRoute: ActivatedRoute, protected formBuilder: FormBuilder, protected productService: ProductService,
              protected refreshService: RefreshService, protected typeService: TypeService, protected snackBar: MatSnackBar,
              private shopService: ShopService, protected router: Router) {
      super(formBuilder, productService, refreshService, typeService, snackBar, router);
    }

  ngOnInit() {
    forkJoin(
      this.shopService.getShop(),
      this.typeService.getTypes(),
      this.activatedRoute.params.pipe(
        switchMap(params => this.typeService.getTypeById(params.id)),
        take(1)
      ),
      this.productService.getProducts(),
      ).subscribe(result => {
        this.shop = result[0];
        this.types = result[1];
        this.type = result[2];
        this.products = result[3];
        this.typeForm = new FormGroup({
          typeName: new FormControl(this.type.typeName, Validators.required),
          superType: new FormControl(this.type.superTypeId)
        });
        this.initAvailableProducts();
        this.initProductsInType();
        this.setTypeSizeAmountForm();
        this.setIsSuperType();
        this.setInShop();
        this.loading = !this.loading;
    });
  }

  private initProductsInType() {
    this.productsInType = this.type.products;
  }

  // NEED TO WRITE OUT UPDATE LOGIC AND REQUIREMENTS INVOLVING SUBTYPE AND SHOP UPDATES
  onUpdateClick() {
    if (this.typeForm.valid) {
      this.setTypeValues();
      if (!this.inShop || this.type.products.length || this.isSuperType) {
        this.typeService.updateType(this.type._id, this.type).subscribe((response: any) => {
          this.showResponseStatus(response.status);
        });
      } else {
        this.shop.shop = this.shop.shop.filter((type: Type) => this.type._id !== type._id);
        forkJoin(
          this.typeService.updateType(this.type._id, this.type),
          this.shopService.updateShop(this.shop._id, this.shop)
        ).subscribe((response: any[]) => {
          const responses = [];
          responses.push(response[0].status);
          responses.push(response[1].status);
          this.showResponseStatus(responses);
        });
      }
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

  private setIsSuperType() {
    this.types.forEach((type: Type ) => {
      if (this.type._id === type.superTypeId) {
        this.isSuperType = true;
      }
    });
  }



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
