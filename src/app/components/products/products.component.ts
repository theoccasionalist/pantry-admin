import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { ProductGridButtonsComponent } from '../product-grid-buttons/product-grid-buttons.component';
import { Type } from 'src/app/models/type.model';
import { Shop } from 'src/app/models/shop.model';
import { DataService } from 'src/app/services/data.service';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  columnDefs = [
    {headerName: 'Name', field: 'productName'},
    {headerName: 'Points', field: 'points', comparator: (firstPoints, secondPoints) => this.pointsComparator(firstPoints, secondPoints)},
    {headerName: 'After School', field: 'school', width: 120},
    {headerName: 'Infant', field: 'infant'},
    {headerName: 'Product Limit', field: 'productLimit', width: 120},
    {headerName: 'Type', field: 'type'},
    {headerName: 'Super Type', field: 'superType', width: 120},
    {headerName: 'Type Limit', field: 'typeLimit'},
    {headerName: 'In Shop', field: 'inShop'},
    {headerName: '', field: 'action', filter: false, sortable: false, width: 150, cellRendererFramework: ProductGridButtonsComponent}
  ];
  defaultColDef = {
    filter: true,
    filterParams: {
      suppressAndOrCondition: true
    },
    resizable: true,
    sortable: true,
    width: 100
  };
  loading = true;
  products: Product[];
  rowData = [];
  shop: Shop;
  types: Type[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    combineLatest(
      this.dataService.getShop(),
      this.dataService.getTypes(),
      this.dataService.getProducts()
    ).subscribe(([shop, types, products]) => {
      this.shop = shop;
      this.types = types;
      this.products = products;
      this.rowData = this.getFormattedFields();
      this.loading = false;
    });

  }

  private getInShopStatus(productToCheck: Product) {
    let inShop = false;
    this.shop.shop.forEach((type: Type) => {
      type.products.forEach((product: Product) => {
        if (product._id === productToCheck._id) {
          inShop = true;
        }
      });
    });
    return inShop;
  }

  private getProductTypeName(productToCheck: Product) {
    let typeName = 'None';
    this.types.forEach((type: Type)  => {
      type.products.forEach((product: Product) => {
        if (product._id === productToCheck._id ) {
          typeName = type.typeName;
        }
      });
    });
    return typeName;
  }

  private getProductSuperTypeName(productToCheck: Product) {
    let superTypeName = 'None';
    this.types.forEach((type: Type) => {
      type.products.forEach((product: Product) => {
        if (product._id === productToCheck._id) {
          if (type.superTypeId) {
            this.types.forEach((superType: Type) => {
              if (type.superTypeId === superType._id) {
                superTypeName = superType.typeName;
              }
            });
          }
        }
      });
    });
    return superTypeName;
  }

  private getTypeLimitStatus(productToCheck: Product) {
    let hasTypeLimit = false;
    this.types.forEach((type: Type) => {
      type.products.forEach((product: Product) => {
        if (product._id === productToCheck._id) {
          if (type.typeSizeAmount) {
            hasTypeLimit = true;
          }
        }
      });
    });
    return hasTypeLimit;
  }

  private getFormattedFields() {
    const rowData = [];
    this.products.forEach((product: Product) => {
      const rowEntry = {};
      Object.defineProperty(rowEntry, '_id', {value: product._id});
      Object.defineProperty(rowEntry, 'productName', {value: product.productName});
      product.points ?
        Object.defineProperty(rowEntry, 'points', {value: product.points}) :
        Object.defineProperty(rowEntry, 'points', {value: 'None'});
      product.school ?
        Object.defineProperty(rowEntry, 'school', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'school', {value: 'No'});
      product.infant ?
        Object.defineProperty(rowEntry, 'infant', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'infant', {value: 'No'});
      product.prodSizeAmount ?
        Object.defineProperty(rowEntry, 'productLimit', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'productLimit', {value: 'No'});
      Object.defineProperty(rowEntry, 'type', {value: this.getProductTypeName(product)});
      Object.defineProperty(rowEntry, 'superType', {value: this.getProductSuperTypeName(product)});
      this.getTypeLimitStatus(product) ?
        Object.defineProperty(rowEntry, 'typeLimit', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'typeLimit', {value: 'No'});
      this.getInShopStatus(product) ?
        Object.defineProperty(rowEntry, 'inShop', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'inShop', {value: 'No'});
      rowData.push(rowEntry);
    });
    return rowData;
  }

  onCreateProductClick() {
    this.router.navigate(['/product']);
  }

  private pointsComparator(firstPoints: any, secondPoints: any) {
    if (isNaN(firstPoints)) {
      firstPoints = 0;
    }
    if (isNaN(secondPoints)) {
      secondPoints = 0;
    }
    return firstPoints > secondPoints ? 1 : -1;
  }
}
