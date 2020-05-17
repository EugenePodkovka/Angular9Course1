import { Component, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { PurchasedProduct } from '../../../shared/interfaces/purchased-product';

@Component({
  selector: 'app-cart-open',
  templateUrl: './cart-open.component.html',
  styleUrls: ['./cart-open.component.scss']
})
export class CartOpenComponent {
  @Input() isCartOpen: boolean | false;

  constructor(
    private cartService: CartServiceService
  ) { }

  closeCart(){
    this.cartService.closeCart();
  }

  getPurchasedProducts(): PurchasedProduct[] {
    return this.cartService.purchasedProducts;
  }

  getTotalCost(): number {
    return this.cartService.getProductsTotalCost();
  }

  removeOneProduct(productId: string) {
    this.cartService.removeOneProductFromCart(productId);
  }

  addOneProduct(productId: string) {
    this.cartService.addOneProduct(productId);
  }

  removeAllOneProduct(productId: string) {
    this.cartService.removeAllOneProduct(productId);
  }
}
