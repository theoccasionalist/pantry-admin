import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPrintModule} from 'ngx-print';
import { TypesComponent } from './components/types/types.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderOverviewComponent } from './components/order-overview/order-overview.component';
import { PantryOverviewComponent } from './components/pantry-overview/pantry-overview.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { TypeAddComponent } from './components/type-add/type-add.component';
import { TypeEditComponent } from './components/type-edit/type-edit.component';
import { SubTypeEditComponent } from './components/sub-type-edit/sub-type-edit.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopEditComponent } from './components/shop-edit/shop-edit.component';
import { ProductGridButtonsComponent } from './components/product-grid-buttons/product-grid-buttons.component';
import { TypeGridButtonsComponent } from './components/type-grid-buttons/type-grid-buttons.component';
import { ProductDeleteModalComponent } from './components/product-delete-modal/product-delete-modal.component';
import { TypeDeleteModalComponent } from './components/type-delete-modal/type-delete-modal.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderGridButtonsComponent } from './components/order-grid-buttons/order-grid-buttons.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { FamilyComponent } from './components/family/family.component';
import { FamilyPrintComponent } from './components/family-print/family-print.component';
import { CartPrintComponent } from './components/cart-print/cart-print.component';
import { OrderDeleteModalComponent } from './components/order-delete-modal/order-delete-modal.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    NavbarComponent,
    OrderOverviewComponent,
    PantryOverviewComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductAddComponent,
    TypeAddComponent,
    TypeEditComponent,
    SubTypeEditComponent,
    ShopComponent,
    ShopEditComponent,
    ProductGridButtonsComponent,
    TypeGridButtonsComponent,
    ProductDeleteModalComponent,
    TypeDeleteModalComponent,
    OrdersComponent,
    OrderGridButtonsComponent,
    OrderComponent,
    CartComponent,
    FamilyComponent,
    FamilyPrintComponent,
    CartPrintComponent,
    OrderDeleteModalComponent,
    LogInComponent,
    CallbackComponent,
  ],
  imports: [
    AgGridModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    NgxPrintModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  entryComponents: [
    OrderDeleteModalComponent,
    OrderGridButtonsComponent,
    ProductDeleteModalComponent,
    ProductGridButtonsComponent,
    TypeDeleteModalComponent,
    TypeGridButtonsComponent
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
