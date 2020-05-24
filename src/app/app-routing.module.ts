import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponentComponent } from './product/components/product-list-component/product-list-component.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/components/product/product.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponentComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'testProduct', component: ProductComponent},
  { path: '**', component: ProductListComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
