import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { OrderService } from 'src/app/order/services/order.service';

@Component({
  selector: 'app-admin-orders-list',
  templateUrl: './admin-orders-list.component.html',
  styleUrls: ['./admin-orders-list.component.scss']
})
export class AdminOrdersListComponent implements OnInit {
  orders: Order[];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.initOrders();
  }

  initOrders() {
    this.orders = this.orderService.getOrdersFromLocalStorage();
  }

}
