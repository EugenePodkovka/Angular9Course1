import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-in-list-component',
  templateUrl: './product-in-list-component.component.html',
  styleUrls: ['./product-in-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductInListComponentComponent {
  @Input() product: Product | undefined;
  @Input() isProductAvailable: boolean;
  @Input() productRemaining: number;
  @Output() productPurchased: EventEmitter<Product> = new EventEmitter<Product>();
  isBuyBtnHover = false;

  onBuy() {
    this.productPurchased.emit(this.product);
  }

  onBuyBtnMouseOver(){
    this.isBuyBtnHover = true;
  }

  onBuyBtnMouseOut(){
    this.isBuyBtnHover = false;
  }
}
