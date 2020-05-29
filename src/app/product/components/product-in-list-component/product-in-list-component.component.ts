import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-in-list-component',
  templateUrl: './product-in-list-component.component.html',
  styleUrls: ['./product-in-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductInListComponentComponent {
  @Input() product: Product;
  @Output() productPurchased: EventEmitter<Product> = new EventEmitter<Product>();

  onBuy() {
    this.productPurchased.emit(this.product);
  }
}
