import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/type.model';
import { TypeGridButtonsComponent } from '../type-grid-buttons/type-grid-buttons.component';
import { Shop } from 'src/app/models/shop.model';
import { combineLatest, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit, OnDestroy {
  columnDefs = [
    {headerName: 'Type Name', field: 'typeName'},
    {headerName: 'Product Count', field: 'productCount'},
    {headerName: 'Type Limit', field: 'typeLimit'},
    {headerName: 'Super Type', field: 'superType'},
    {headerName: 'In Shop', field: 'inShop'},
    {headerName: '', field: 'action', filter: false, sortable: false, width: 150, cellRendererFramework: TypeGridButtonsComponent}
  ];
  defaultColDef = {
    filter: true,
    filterParams: {
      suppressAndOrCondition: true
    },
    resizable: true,
    sortable: true,
    width: 120
  };
  private gridApi;
  loading = true;
  rowData = [];
  shop: Shop;
  subscription = new Subscription();
  types: Type[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.subscription.add(
      combineLatest(
      this.dataService.getShop(),
      this.dataService.getTypes()
      ).subscribe(([shop, types]) => {
        console.log('types component', shop);
        this.shop = shop;
        this.types = types;
        this.rowData = this.getFormattedFields();
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.setRowData(this.rowData);
  }

  private getInShopStatus(typeToCheck: Type) {
    let inShop = false;
    this.shop.shop.forEach((type: Type) => {
      if (type._id === typeToCheck._id) {
        inShop = true;
      }
    });
    return inShop;
  }

  private getSuperTypeName(typeToCheck: Type) {
    let superTypeName = 'None';
    this.types.forEach((type: Type) => {
      if (type._id === typeToCheck.superTypeId) {
        superTypeName = type.typeName;
      }
    });
    return superTypeName;
  }

  private getFormattedFields() {
    const rowData = [];
    this.types.forEach((type: Type) => {
      const rowEntry = {};
      Object.defineProperty(rowEntry, '_id', {value: type._id});
      Object.defineProperty(rowEntry, 'typeName', {value: type.typeName});
      type.products ?
        Object.defineProperty(rowEntry, 'productCount', {value: type.products.length}) :
        Object.defineProperty(rowEntry, 'productCount', {value: 0});
      type.typeSizeAmount ?
        Object.defineProperty(rowEntry, 'typeLimit', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'typeLimit', {value: 'No'});
      Object.defineProperty(rowEntry, 'superType', {value: this.getSuperTypeName(type)});
      this.getInShopStatus(type) ?
        Object.defineProperty(rowEntry, 'inShop', {value: 'Yes'}) :
        Object.defineProperty(rowEntry, 'inShop', {value: 'No'});
      rowData.push(rowEntry);
    });
    return rowData;
  }

  onCreateTypeClick() {
    this.router.navigate(['/type']);
  }

  onRowClicked() {
    this.router.navigate(['/product']);
  }

  onSubTypesClick() {
    this.router.navigate(['/sub-types']);
  }
}
