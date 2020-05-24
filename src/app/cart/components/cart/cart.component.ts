import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(
    private cartService: CartService
  ) { }

  onRemoveAllProductsClick() {
    this.cartService.removeAllProducts();
  }

  getPurchasedProducts(): PurchasedProduct[] {
    return this.cartService.purchasedProducts;
  }

  decreaseQuantity(productId: string) {
    this.cartService.decreaseQuantity(productId);
  }

  increaseQuantity(productId: string) {
    this.cartService.increaseQuantity(productId);
  }

  removeProduct(productId: string) {
    this.cartService.removeProduct(productId);
  }
}
