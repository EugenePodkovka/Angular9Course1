import { Component, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductServiceService } from 'src/app/product/services/product-service.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-admin-product-in-list',
  templateUrl: './admin-product-in-list.component.html',
  styleUrls: ['./admin-product-in-list.component.scss']
})
export class AdminProductInListComponent {
  @Input() product: Product;
  @Input() productRemaining: number;

  constructor(
    private productService: ProductServiceService,
    private cartService: CartService
  ) { }

  onSaveClick() {
    this.productService.updateProductInStock(this.product, this.productRemaining);
    this.cartService.savePurchasedProducts();
  }
}
