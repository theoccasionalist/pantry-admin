import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/type.model';
import { TypeService } from 'src/app/services/type.service';
import { TypeGridButtonsComponent } from '../type-grid-buttons/type-grid-buttons.component';
import { ShopService } from 'src/app/services/shop.service';
import { forkJoin } from 'rxjs';
import { RefreshService } from 'src/app/services/refresh.service';
import { Shop } from 'src/app/models/shop.model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
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
  loading = true;
  rowData = [];
  shop: Shop;
  types: Type[];

  constructor(private refreshService: RefreshService, private router: Router, private shopService: ShopService,
              private typeService: TypeService) { }

  ngOnInit() {
    this.refreshService.closePantryRefresh();
    forkJoin(
      this.shopService.getShop(),
      this.typeService.getTypes()
    ).subscribe((results: any[]) => {
      this.shop = results[0];
      this.types = results[1];
      this.rowData = this.getFormattedFields();
      this.loading = false;
    });
    this.refreshService.getPantryRefresh().subscribe((refresh: boolean) => {
      if (refresh) {
        this.pageReload();
      }
    });
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

  private pageReload() {
    this.loading = true;
    this.ngOnInit();
  }
}
