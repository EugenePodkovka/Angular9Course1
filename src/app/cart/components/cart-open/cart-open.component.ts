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

  closeCart(){
    this.cartService.closeCart();
  }

  getPurchasedProducts(): PurchasedProduct[] {
    return this.cartService.purchasedProducts;
  }

  removeOneProduct(productId: string) {
    this.cartService.decreaseQuantity(productId);
  }

  addOneProduct(productId: string) {
    this.cartService.increaseQuantity(productId);
  }

  removeAllOneProduct(productId: string) {
    this.cartService.removeProduct(productId);
  }
}
