import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent {
  @Input() purchasedProducts: PurchasedProduct[];
  @Input() totalCost: number;
  @Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() addProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeAllProducts: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onRemoveProduct(productId: string){
    this.removeProduct.emit(productId);
  }

  onAddProduct(productId: string){
    this.addProduct.emit(productId)
  }

  onRemoveAllProducts(productId: string){
    this.removeAllProducts.emit(productId);
  }
}
