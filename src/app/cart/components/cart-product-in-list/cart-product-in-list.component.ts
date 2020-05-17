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
  @Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeAllProducts: EventEmitter<string> = new EventEmitter<string>();
  @Output() addProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onRemoveClick() {
    this.removeProduct.emit(this.purchasedProduct.Product.Id);
  }

  onAddClick() {
    this.addProduct.emit(this.purchasedProduct.Product.Id);
  }

  onRemoveAllClick() {
    this.removeAllProducts.emit(this.purchasedProduct.Product.Id);
  }

}
