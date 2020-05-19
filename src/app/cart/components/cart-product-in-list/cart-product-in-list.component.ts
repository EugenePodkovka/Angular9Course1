import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';

@Component({
  selector: 'app-cart-product-in-list',
  templateUrl: './cart-product-in-list.component.html',
  styleUrls: ['./cart-product-in-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductInListComponent {
  @Input() purchasedProduct: PurchasedProduct;
  @Output() decreaseProductCount: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeAllSingleProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() increaseProductCount: EventEmitter<string> = new EventEmitter<string>();

  onDecreaseProductCountClick() {
    this.decreaseProductCount.emit(this.purchasedProduct.Product.Id);
  }

  onIncreaseProductCountClick() {
    this.increaseProductCount.emit(this.purchasedProduct.Product.Id);
  }

  onRemoveAllSingleProductClick() {
    this.removeAllSingleProduct.emit(this.purchasedProduct.Product.Id);
  }

}
