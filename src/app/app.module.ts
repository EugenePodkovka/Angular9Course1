import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { LocalStorageService } from './core/services';
import { AboutComponent } from './about/about.component';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductModule,
    SharedModule,
    OrderModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService }
  ]
})
export class AppModule { }
