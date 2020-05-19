import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductListComponent {
  @Input() purchasedProducts: PurchasedProduct[];
  @Output() decreaseQuantity: EventEmitter<string> = new EventEmitter<string>();
  @Output() increaseQuantity: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private cartService: CartService
  ) { }

  onDecreaseQuantityClick(productId: string){
    this.decreaseQuantity.emit(productId);
  }

  onIncreaseQuantityClick(productId: string){
    this.increaseQuantity.emit(productId);
  }

  onRemoveProductClick(productId: string){
    this.removeProduct.emit(productId);
  }

  getTotalCost(): number {
    return this.cartService.getProductsTotalCost();
  }

  getTotalProducts(): number {
    return this.cartService.getProductsInCartCount();
  }
}
