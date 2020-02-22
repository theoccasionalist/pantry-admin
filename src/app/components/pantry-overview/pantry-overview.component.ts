import { Component, OnInit, OnDestroy, ViewChild, OnChanges } from '@angular/core';
import { PantryPanelService } from 'src/app/services/pantry-panel.service';
import { Subscription, combineLatest } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ShopService } from 'src/app/services/shop.service';
import { TypeService } from 'src/app/services/type.service';
import { Product } from 'src/app/models/product.model';
import { Shop } from 'src/app/models/shop.model';
import { Type } from 'src/app/models/type.model';
import { RefreshService } from 'src/app/services/refresh.service';
import { ProductsComponent } from '../products/products.component';
import { TypesComponent } from '../types/types.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pantry-overview',
  templateUrl: './pantry-overview.component.html',
  styleUrls: ['./pantry-overview.component.css']
})
export class PantryOverviewComponent implements OnInit, OnDestroy, OnChanges {
  loading = true;
  productPanelOpenState = false;
  products: Product[];
  // @ViewChild(ProductsComponent, { static: false }) productsComponent: ProductsComponent;
  refresh = false;
  shop: Shop;
  shopPanelOpenState = false;
  subscription = new Subscription();
  typePanelOpenState = false;
  types: Type[];
  // @ViewChild(TypesComponent, {static: false}) typesComponent: TypesComponent;

  constructor(public pantryPanelService: PantryPanelService, private productService: ProductService, private refreshService: RefreshService,
              private shopService: ShopService, private typeService: TypeService, private dataService: DataService) { }

  ngOnInit() {
    this.subscription.add(
      this.pantryPanelService.getPanelOpenStates().subscribe((panelOpenStates) => {
        this.productPanelOpenState = panelOpenStates.get('product');
        this.typePanelOpenState = panelOpenStates.get('type');
        this.shopPanelOpenState = panelOpenStates.get('shop');
        this.loading = false;
      })
    );
  }

  ngOnChanges(): void {
    console.log(this.types);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
