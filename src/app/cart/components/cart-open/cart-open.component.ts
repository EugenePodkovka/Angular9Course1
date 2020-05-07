import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { Product } from 'src/app/product/interfaces/Product';

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

  getPurchasedProducts(): Product[] {
    return this.cartService.purchasedProducts;
  }

  getTotalCost(): number {
    return this.cartService.purchasedProducts.reduce((acc, val) => acc + val.price, 0);
  }

}
