import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsListComponent } from './components/admin-products-list/admin-products-list.component';
import { AdminProductInListComponent } from './components/admin-product-in-list/admin-product-in-list.component';
import { AdminProductEditComponent } from './components/admin-product-edit/admin-product-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsListComponent,
    AdminProductInListComponent,
    AdminProductEditComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AdminModule { }
