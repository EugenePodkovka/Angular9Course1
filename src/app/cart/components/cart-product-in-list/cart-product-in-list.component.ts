import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';

@Component({
  selector: 'app-cart-product-in-list',
  templateUrl: './cart-product-in-list.component.html',
  styleUrls: ['./cart-product-in-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CartProductInListComponent {
  @Input() purchasedProduct: PurchasedProduct;
  @Output() increaseQuantity: EventEmitter<string> = new EventEmitter<string>();
  @Output() decreaseQuantity: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();

  onIncreaseQuantityClick() {
    this.increaseQuantity.emit(this.purchasedProduct.Product.Id);
  }

  onDecreaseQuantityClick() {
    this.decreaseQuantity.emit(this.purchasedProduct.Product.Id);
  }

  onRemoveProductClick() {
    this.removeProduct.emit(this.purchasedProduct.Product.Id);
  }

}
