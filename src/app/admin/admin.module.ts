import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsListComponent } from './components/admin-products-list/admin-products-list.component';
import { AdminProductInListComponent } from './components/admin-product-in-list/admin-product-in-list.component';
import { AdminProductEditComponent } from './components/admin-product-edit/admin-product-edit.component';
import { AdminOrdersListComponent } from './components/admin-orders-list/admin-orders-list.component';
import { AdminOrderInListComponent } from './components/admin-order-in-list/admin-order-in-list.component';
import { AdminOrderEditComponent } from './components/admin-order-edit/admin-order-edit.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsListComponent,
    AdminProductInListComponent,
    AdminProductEditComponent,
    AdminOrdersListComponent,
    AdminOrderInListComponent,
    AdminOrderEditComponent,
    AdminMainComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AdminModule { }
