import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { minMaxValidator, ProductAddComponent } from '../product-add/product-add.component';
import { forkJoin } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';
import { Shop } from 'src/app/models/shop.model';
import { Type } from 'src/app/models/type.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: '../product-add/product-add.component.html',
  styleUrls: ['../product-add/product-add.component.css']
})
export class ProductEditComponent extends ProductAddComponent implements OnInit {
  inShop = false;
  loading = true;
  prodSizeAmount: FormArray;
  product: Product;
  productForm: FormGroup;
  requiredError = 'This field is required';
  shop: Shop;

  constructor(private activatedRoute: ActivatedRoute, protected formBuilder: FormBuilder, protected productService: ProductService,
              private shopService: ShopService, protected snackBar: MatSnackBar, protected router: Router) {
                super(formBuilder, productService, snackBar, router);
              }

  ngOnInit() {
    forkJoin(
      this.activatedRoute.params.pipe(
        switchMap(params => this.productService.getProductById(params.id)),
        take(1)),
      this.shopService.getShop()
    ).subscribe((result: any[]) => {
      this.product = result[0];
      this.productForm = new FormGroup({
        productName: new FormControl(this.product.productName, Validators.required),
        points: new FormControl(this.product.points ? this.product.points : false, Validators.required),
        school: new FormControl(this.product.school ? this.product.school : false, Validators.required),
        infant: new FormControl(this.product.infant ? this.product.infant : false, Validators.required),
      });
      this.setProdSizeAmountForm();
      this.shop = result[1];
      this.setInShop();
      this.loading = !this.loading;
    });
  }

  onUpdateClick() {
    if (this.productForm.valid) {
      this.setProductValues();
      this.productService.updateProduct(this.product._id, this.product).subscribe((response: any) => {
        if (response.status === 200) {
          this.snackBar.open(`${this.product.productName} updated successfully.`, 'Dismiss', {
            panelClass: ['green-snackbar']
          });
          this.router.navigate([`/pantry`]);
        } else {
          this.snackBar.open(`${this.product.productName} failed to update.`, 'Dismiss', {
            panelClass: ['red-snackbar']
          });
          this.router.navigate([`/pantry`]);
        }
      });
    }
  }

  setInShop() {
    this.shop.shop.forEach((type: Type) => {
      type.products.forEach((product: Product) => {
        if (this.product._id === product._id) {
          this.inShop = true;
        }
      });
    });
  }

  setProdSizeAmountForm() {
    if (this.product.prodSizeAmount) {
      this.prodSizeAmount = new FormArray([]);
      this.product.prodSizeAmount.forEach(element => {
        this.prodSizeAmount.push(this.formBuilder.group({
          minFamSize: [element.minFamSize, Validators.required],
          maxFamSize: [element.maxFamSize, Validators.required],
          maxAmount: [element.maxAmount, Validators.required]
        },
        { validator: minMaxValidator }
        ));
        this.productForm.addControl('prodSizeAmount', this.prodSizeAmount);
      });
    }
  }
}
