import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Type } from 'src/app/models/type.model';
import { Router } from '@angular/router';
import { ShopType } from 'src/app/models/shop-type.model';
import { Shop } from 'src/app/models/shop.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() subType: Type;
  currentTypes: ShopType[];
  shopTypes: ShopType[] = [];

  constructor(private router: Router, private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getShop().subscribe((shop: Shop) => {
      this.currentTypes = shop.shop;
      this.setSubTypes();
      this.sortShop();
    });
  }

  onEditClick() {
    this.router.navigate(['/shop']);
  }

  private setSubTypes() {
    this.currentTypes.forEach((currentType: ShopType) => {
      if (!currentType.superTypeId) {
        this.shopTypes.push(currentType);
      }
    });
    this.shopTypes.forEach((shopType: ShopType) => {
      this.currentTypes.forEach((currentType: ShopType) => {
        if (currentType.superTypeId === shopType._id) {
          shopType.subTypes = [];
          shopType.subTypes.push(currentType);
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
