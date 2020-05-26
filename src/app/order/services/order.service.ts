import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { LocalStorageService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderLocalKey = 'OrderClientData';

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  submitOrder(order: Order) {
    const storedOrders = this.getOrdersFromLocalStorage();
    storedOrders.push(order);
    this.localStorageService.setItem(this.orderLocalKey, storedOrders);
  }

  getOrdersFromLocalStorage(): Order[] {
    let currentOrders = this.localStorageService.getItem(this.orderLocalKey);
    if (currentOrders == null) {
      currentOrders = [];
    }
    return currentOrders as Order[];
  }
}
