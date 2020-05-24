import { Component, OnInit } from '@angular/core';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-order-first-step',
  templateUrl: './order-first-step.component.html',
  styleUrls: ['./order-first-step.component.scss']
})
export class OrderFirstStepComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  getPurchasedProducts(): PurchasedProduct[] {
    return this.cartService.purchasedProducts;
  }

  getTotalCost(): number {
    return this.cartService.getProductsTotalCost();
  }

  getTotalProducts(): number {
    return this.cartService.getProductsInCartCount();
  }

}
