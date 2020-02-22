import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

export const minMaxValidator: ValidatorFn = (formGroup: FormGroup) => {
  const minFamSize = formGroup.get('minFamSize').value;
  const maxFamSize = formGroup.get('maxFamSize').value;
  if (minFamSize !== '' && maxFamSize !== '') {
    return minFamSize > maxFamSize ? {minMax: true} : null;
  }
};

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  limitDeleted = false;
  loading = true;
  prodSizeAmount: FormArray;
  product = new Product();
  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    points: new FormControl('', Validators.required),
    school: new FormControl('', Validators.required),
    infant: new FormControl('', Validators.required),
  });
  requiredError = 'This field is required.';

  constructor(protected formBuilder: FormBuilder, protected productService: ProductService,
              protected snackBar: MatSnackBar, protected router: Router) { }

  ngOnInit() {
    this.loading = !this.loading;
  }

  addSizeAmount() {
    this.prodSizeAmount.push(this.formBuilder.group({
      minFamSize: ['', [Validators.required]],
      maxFamSize: ['', Validators.required],
      maxAmount: ['', Validators.required]
    }, { validator: minMaxValidator }
    ));
  }

  deleteSizeAmount(index: number) {
    this.limitDeleted = true;
    this.prodSizeAmount.removeAt(index);
    if (!this.prodSizeAmount.length) {
      this.productForm.removeControl('prodSizeAmount');
    }
  }

  initSizeAmount() {
    this.prodSizeAmount = new FormArray([]);
    this.addSizeAmount();
    this.productForm.addControl('prodSizeAmount', this.prodSizeAmount);
  }

  onAddClick() {
    if (this.productForm.valid) {
      this.setProductValues();
      this.productService.addProduct(this.product).subscribe((response: any) => {
        if (response.status === 200) {
          this.snackBar.open(`${this.product.productName} added successfully.`, 'Dismiss', {
            duration: 2000,
            panelClass: ['green-snackbar']
          });
          this.router.navigate([`/pantry`]);
        } else {
          this.snackBar.open(`${this.product.productName} add failed.`, 'Dismiss', {
            duration: 2000,
            panelClass: ['red-snackbar']
          });
          this.router.navigate([`/pantry`]);
        }
      });
    }
  }

  onCancelClick() {
    this.router.navigate([`/pantry`]);
  }

  setProductValues() {
    this.product.productName = this.productForm.get('productName').value;
    this.productForm.get('prodSizeAmount') && this.prodSizeAmount.length ?
      this.product.prodSizeAmount = this.productForm.get('prodSizeAmount').value :
      this.product.prodSizeAmount = undefined;
    this.productForm.get('points') && this.productForm.get('points').value ?
      this.product.points = this.productForm.get('points').value :
      this.product.points = undefined;
    this.productForm.get('school') && this.productForm.get('school').value ?
      this.product.school = this.productForm.get('school').value :
      this.product.school = undefined;
    this.productForm.get('infant') && this.productForm.get('infant').value ?
      this.product.infant = this.productForm.get('infant').value :
      this.product.infant = undefined;
  }
}
