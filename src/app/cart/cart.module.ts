import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartMinimizedComponent } from './components/cart-minimized/cart-minimized.component';
import { CartOpenComponent } from './components/cart-open/cart-open.component';
import { CartProductListComponent } from './components/cart-product-list/cart-product-list.component';
import { CartProductInListComponent } from './components/cart-product-in-list/cart-product-in-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartMinimizedComponent,
    CartOpenComponent,
    CartProductListComponent,
    CartProductInListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartMinimizedComponent,
    CartOpenComponent
  ]
})
export class CartModule { }
