import { NgModule } from '@angular/core';
import { ProductInListComponentComponent } from './components/product-in-list-component/product-in-list-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductInListComponentComponent,
    ProductListComponentComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponentComponent
  ]
})
export class ProductModule { }
