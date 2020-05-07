import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './main/components/app-component/app.component';
import { FirstComponentComponent } from './main/components/first-component/first-component.component';
import { ProductInListComponentComponent } from './product/components/product-in-list-component/product-in-list-component.component';
import { ProductListComponentComponent } from './product/components/product-list-component/product-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductInListComponentComponent,
    ProductListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
