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
import { AuthGuard } from './guards/auth.guard';
import { CallbackComponent } from './components/callback/callback.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';


const routes: Routes = [
  {path: 'callback', component: CallbackComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'orders', component: OrderOverviewComponent, canActivate: [AuthGuard]},
  {path: 'order/:id', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'pantry', component: PantryOverviewComponent, canActivate: [AuthGuard]},
  {path: 'product', component: ProductAddComponent, canActivate: [AuthGuard]},
  {path: 'product/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: 'shop', component: ShopEditComponent, canActivate: [AuthGuard]},
  {path: 'sub-types', component: SubTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'type', component: TypeAddComponent, canActivate: [AuthGuard]},
  {path: 'type/:id', component: TypeEditComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'log-in', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
