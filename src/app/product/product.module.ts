import { NgModule } from '@angular/core';
import { ProductInListComponentComponent } from './components/product-in-list-component/product-in-list-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductInListComponentComponent,
    ProductListComponentComponent,
    ProductComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponentComponent
  ]
})
export class ProductModule { }
