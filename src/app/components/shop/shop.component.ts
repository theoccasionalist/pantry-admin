import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Type } from 'src/app/models/type.model';
import { Router } from '@angular/router';
import { ShopType } from 'src/app/models/shop-type.model';
import { Shop } from 'src/app/models/shop.model';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {
  currentTypes: ShopType[] = [];
  shop: Shop;
  shopTypes: ShopType[] = [];
  typesInShop: ShopType[] = [];
  private subscription = new Subscription();

  constructor(private dataService: DataService, private router: Router, private shopService: ShopService) { }

  ngOnInit() {
    this.subscription.add(
      this.dataService.getShop().pipe(tap(res => console.log('shop', res))).subscribe((shop: Shop) => {
        const copy: ShopType[]  = cloneDeep(shop.shop);
        this.currentTypes = copy;
        this.setSubTypes();
        this.sortShop();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditClick() {
    this.router.navigate(['/shop']);
  }

  private setSubTypes() {
    console.log('I am set subtypes');
    this.currentTypes.forEach((currentType: ShopType) => {
      if (!currentType.superTypeId) {
        this.shopTypes.push(currentType);
      }
    });
    this.shopTypes.forEach((shopType: ShopType) => {
      this.currentTypes.forEach((currentType: ShopType) => {
        if (currentType.superTypeId === shopType._id) {
          if (!shopType.subTypes) {
            shopType.subTypes = [];
          }
          if (!shopType.subTypes.some((subType: Type) => subType._id === currentType._id)) {
            shopType.subTypes.push(currentType);
          }
        }
      });
    });
  }

  private sortShop() {
    this.shopTypes.forEach((shopType: ShopType) => {
      shopType.products.sort((beforeProduct: Product, afterProduct: Product) => {
        return beforeProduct.productName > afterProduct.productName ? 1 : -1;
      });
      if (shopType.subTypes) {
        shopType.subTypes.forEach((subType: Type) => {
          subType.products.sort((beforeSubProduct: Product, afterSubProduct: Product) => {
            return beforeSubProduct.productName > afterSubProduct.productName ? 1 : -1;
          });
        });
        shopType.subTypes.sort((beforeSubType: Type, afterSubType: Type) => {
          return beforeSubType.typeName > afterSubType.typeName ? 1 : -1;
        });
      }
    });
  }
}
