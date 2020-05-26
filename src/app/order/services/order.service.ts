import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { LocalStorageService } from 'src/app/core/services';
import { GuidHelperService } from 'src/app/shared/services/guid-helper/guid-helper.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderLocalKey = 'OrderClientData';

  constructor(
    private localStorageService: LocalStorageService,
    private guidHelperService: GuidHelperService
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

  getNewOrder(): Order {
    return {
      Id: this.guidHelperService.NewGuid()
    } as Order;
  }

  updateOrderPropertyInLocalStorage(order: Order, key: string) {
    const storedOrders = this.getOrdersFromLocalStorage();
    const storedOrder = storedOrders?.find(o => o.Id === order.Id);
    storedOrder[key] = order[key];
    this.localStorageService.setItem(this.orderLocalKey, storedOrders);
  }
}
