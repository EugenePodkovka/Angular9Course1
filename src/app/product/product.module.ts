import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInListComponentComponent } from './components/product-in-list-component/product-in-list-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';

@NgModule({
  declarations: [
    ProductInListComponentComponent,
    ProductListComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponentComponent
  ]
})
export class ProductModule { }
