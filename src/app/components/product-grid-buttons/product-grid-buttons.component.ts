import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Shop } from 'src/app/models/shop.model';
import { ProductDeleteModalComponent } from '../product-delete-modal/product-delete-modal.component';

@Component({
  selector: 'app-product-grid-buttons',
  templateUrl: './product-grid-buttons.component.html',
  styleUrls: ['./product-grid-buttons.component.css']
})
export class ProductGridButtonsComponent implements OnInit {
  data: any;
  params: any;
  shop: Shop;
  types: Type[];

  constructor(private dialog: MatDialog, private router: Router) { }

  agInit(params) {
    this.data =  params.data;
  }

  ngOnInit() {}

  onDeleteClick() {
    this.dialog.open(ProductDeleteModalComponent, {
      data: this.data,
      disableClose: true,
      panelClass: ['delete-dialog-container'],
      width: '34rem'
    });
  }

  onEditClick() {
    this.router.navigate(['/product', this.data._id]);
  }
}
