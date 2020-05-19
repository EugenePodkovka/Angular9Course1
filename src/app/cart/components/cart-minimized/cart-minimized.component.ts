import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-minimized',
  templateUrl: './cart-minimized.component.html',
  styleUrls: ['./cart-minimized.component.scss']
})
export class CartMinimizedComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  onCartOpen() {
    this.cartService.openCart();
  }

  getCartProductsCount(): number{
    return this.cartService.getProductsInCartCount();
  }

}
