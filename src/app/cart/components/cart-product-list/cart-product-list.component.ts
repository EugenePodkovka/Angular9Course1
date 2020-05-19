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
  @Output() decreaseProductCount: EventEmitter<string> = new EventEmitter<string>();
  @Output() increaseProductCount: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeAllSingleProduct: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private cartService: CartService
  ) { }

  onDecreaseProductCountClick(productId: string){
    this.decreaseProductCount.emit(productId);
  }

  onIncreaseProductCountClick(productId: string){
    this.increaseProductCount.emit(productId);
  }

  onRemoveAllSingleProductClick(productId: string){
    this.removeAllSingleProduct.emit(productId);
  }

  getTotalCost(): number {
    return this.cartService.getProductsTotalCost();
  }

  getTotalProducts(): number {
    return this.cartService.getProductsInCartCount();
  }
}
