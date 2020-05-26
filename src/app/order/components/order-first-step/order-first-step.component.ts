import { Component, OnInit } from '@angular/core';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';
import { CartService } from 'src/app/cart/services/cart.service';
import { OrderService } from '../../services/order.service';
import { Order } from 'src/app/shared/interfaces/order';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-first-step',
  templateUrl: './order-first-step.component.html',
  styleUrls: ['./order-first-step.component.scss']
})
export class OrderFirstStepComponent implements OnInit {
  order: Order;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initOrder();
  }

  onSubmitClick() {
    if (this.order?.Id == null) {

    } else {
      this.submit();
      this.popupOrderConfirmation();
    }
  }

  submit() {
    this.order.Description = JSON.stringify(this.getPurchasedProducts());
    this.orderService.submitOrder(this.order);
    this.initOrder();
  }

  popupOrderConfirmation() {
    this.snackBar.open('Thank you!', 'Order was submitted', {
      duration: 2000
    });
  }

  initOrder() {
    this.order = this.orderService.getNewOrder();
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
