import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponentComponent } from './product/components/product-list-component/product-list-component.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/components/product/product.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderFirstStepComponent } from './order/components/order-first-step/order-first-step.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { AdminProductsListComponent } from './admin/components/admin-products-list/admin-products-list.component';
import { AdminProductEditComponent } from './admin/components/admin-product-edit/admin-product-edit.component';
import { AdminOrdersListComponent } from './admin/components/admin-orders-list/admin-orders-list.component';
import { AdminOrderEditComponent } from './admin/components/admin-order-edit/admin-order-edit.component';
import { AdminMainComponent } from './admin/components/admin-main/admin-main.component';
import { AdminGuard } from './core/guards/admin.guard';
import { ProductEditResolver } from './product/classes/product-edit-resolver';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent, resolve: { productData: ProductEditResolver } },
  { path: 'testProduct', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orderFirst', component: OrderFirstStepComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'main', component: AdminMainComponent },
      { path: 'products', component: AdminProductsListComponent },
      { path: 'product/add', component: AdminProductEditComponent },
      { path: 'product/edit/:id', component: AdminProductEditComponent },
      { path: 'orders', component: AdminOrdersListComponent },
      { path: 'order/edit/:id', component: AdminOrderEditComponent }
    ]
  },
  { path: '**', component: ProductListComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
