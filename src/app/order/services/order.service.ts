import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { GuidHelperService, LocalStorageService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private localStorageService: LocalStorageService,
    private guidHelperService: GuidHelperService
  ) { }

  submitOrder(order: Order) {
    const storedOrders = this.getOrdersFromLocalStorage();
    storedOrders.push(order);
    this.localStorageService.setItem(this.localStorageService.keys.orderClientData, storedOrders);
  }

  getOrdersFromLocalStorage(): Order[] {
    let currentOrders = this.localStorageService.getItem(this.localStorageService.keys.orderClientData);
    if (currentOrders == null) {
      currentOrders = [];
    }
    return currentOrders as Order[];
  }

  getNewOrder(): Order {
    return {
      Id: this.guidHelperService.NewGuid()
    } as Order;
  }

  updateOrderPropertyInLocalStorage(order: Order, key: string) {
    const storedOrders = this.getOrdersFromLocalStorage();
    const storedOrder = storedOrders?.find(o => o.Id === order.Id);
    storedOrder[key] = order[key];
    this.localStorageService.setItem(this.localStorageService.keys.orderClientData, storedOrders);
  }
}
