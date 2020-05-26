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
import { AdminModule } from './admin/admin.module';
import { LoginOpenComponent } from './login/components/login-open/login-open.component';
import { LoginMinimizedComponent } from './login/components/login-minimized/login-minimized.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginOpenComponent,
    LoginMinimizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductModule,
    SharedModule,
    OrderModule,
    AdminModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService }
  ]
})
export class AppModule { }
