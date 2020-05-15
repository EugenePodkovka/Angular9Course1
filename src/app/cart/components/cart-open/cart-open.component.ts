import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { PurchasedProduct } from '../../../shared/interfaces/purchased-product';

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
    return this.cartService.getProductsTotalCost();
  }

  removeOneProduct(productId: string){
    this.cartService.removeOneProductFromCart(productId);
  }
}
