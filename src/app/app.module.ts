import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app-component/app.component';
import { CartModule } from '../cart/cart.module';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
