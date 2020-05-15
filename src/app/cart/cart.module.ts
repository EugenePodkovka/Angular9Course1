import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartMinimizedComponent } from './components/cart-minimized/cart-minimized.component';
import { CartOpenComponent } from './components/cart-open/cart-open.component';

@NgModule({
  declarations: [
    CartMinimizedComponent,
    CartOpenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartMinimizedComponent,
    CartOpenComponent
  ]
})
export class CartModule { }
