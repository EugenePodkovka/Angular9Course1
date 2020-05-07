import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { PurchasedProduct } from '../../interfaces/purchased-product';

@Component({
  selector: 'app-cart-open',
  templateUrl: './cart-open.component.html',
  styleUrls: ['./cart-open.component.scss']
})
export class CartOpenComponent implements OnInit {
  @Input() isCartOpen: boolean | false;

  constructor(
    private cartService: CartServiceService
  ) { }

  ngOnInit(): void {
  }

  closeCart(){
    this.cartService.closeCart();
  }

  getPurchasedProducts(): PurchasedProduct[] {
    return this.cartService.purchasedProducts;
  }

  getTotalCost(): number {
    return this.cartService.purchasedProducts.reduce((acc, val) => acc + val.product.price * val.count, 0);
  }

  removeOneProduct(productId: string){
    this.cartService.removeOneProductFromCart(productId);
  }
}
