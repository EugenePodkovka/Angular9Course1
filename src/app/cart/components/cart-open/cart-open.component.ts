import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PurchasedProduct } from '../../../shared/interfaces/purchased-product';

@Component({
  selector: 'app-cart-open',
  templateUrl: './cart-open.component.html',
  styleUrls: ['./cart-open.component.scss']
})
export class CartOpenComponent {
  @Input() isCartOpen: boolean | false;

  constructor(
    private cartService: CartService
  ) { }

  onCloseCartClick() {
    this.cartService.closeCart();
  }

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
