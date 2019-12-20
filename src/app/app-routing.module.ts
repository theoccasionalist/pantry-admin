import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryOverviewComponent } from './components/pantry-overview/pantry-overview.component';
import { OrderOverviewComponent } from './components/order-overview/order-overview.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { TypeAddComponent } from './components/type-add/type-add.component';
import { TypeEditComponent } from './components/type-edit/type-edit.component';
import { SubTypeEditComponent } from './components/sub-type-edit/sub-type-edit.component';
import { ShopEditComponent } from './components/shop-edit/shop-edit.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  {path: 'orders', component: OrderOverviewComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'pantry', component: PantryOverviewComponent},
  {path: 'product', component: ProductAddComponent},
  {path: 'product/:id', component: ProductEditComponent},
  {path: 'shop', component: ShopEditComponent},
  {path: 'sub-types', component: SubTypeEditComponent},
  {path: 'type', component: TypeAddComponent},
  {path: 'type/:id', component: TypeEditComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
