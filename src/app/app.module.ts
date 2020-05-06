import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app-component/app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponentComponent
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
