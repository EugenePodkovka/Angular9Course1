import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { OrderService } from 'src/app/order/services/order.service';

@Component({
  selector: 'app-admin-order-in-list',
  templateUrl: './admin-order-in-list.component.html',
  styleUrls: ['./admin-order-in-list.component.scss']
})
export class AdminOrderInListComponent implements OnInit {
  @Input() order: Order;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  onProcessedClick() {
    this.order.IsProcessed = true;
    this.orderService.updateOrderPropertyInLocalStorage(this.order, 'IsProcessed');
  }

}
