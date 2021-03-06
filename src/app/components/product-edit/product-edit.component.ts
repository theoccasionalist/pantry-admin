import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { minMaxValidator, ProductAddComponent } from '../product-add/product-add.component';
import { combineLatest } from 'rxjs';
import { Shop } from 'src/app/models/shop.model';
import { Type } from 'src/app/models/type.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: '../product-edit/product-edit.component.html',
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

  constructor(private activatedRoute: ActivatedRoute, protected dataService: DataService, protected formBuilder: FormBuilder,
              protected productService: ProductService, protected snackBar: MatSnackBar,
              protected router: Router) {
                super(dataService, formBuilder, productService, snackBar, router);
              }

  ngOnInit() {
    combineLatest([
      this.activatedRoute.params.pipe(
        switchMap(params => this.dataService.getProductById(params.id)),
        take(1)),
      this.dataService.getShop()
      ]).subscribe(([product, shop]) => {
      this.rerouteOnEmptyProduct(product);
      this.product = product;
      this.productForm = new FormGroup({
        productName: new FormControl(this.product.productName, Validators.required),
        points: new FormControl(this.product.points ? this.product.points : false, Validators.required),
        school: new FormControl(this.product.school ? this.product.school : false, Validators.required),
        infant: new FormControl(this.product.infant ? this.product.infant : false, Validators.required),
      });
      this.setProdSizeAmountForm();
      this.shop = shop;
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
        this.dataService.updateProducts();
        this.dataService.updateShop();
        this.dataService.updateTypes();
      });
    }
  }

  rerouteOnEmptyProduct(product: any) {
    if (product === undefined || Object.entries(product).length === 0 && product.constructor === Object) {
      this.snackBar.open('Product not found. Please try again.', 'Dismiss', {
        panelClass: ['red-snackbar']
      });
      this.router.navigate([`/pantry`]);
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
