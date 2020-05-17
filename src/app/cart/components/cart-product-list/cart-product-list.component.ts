import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PurchasedProduct } from 'src/app/shared/interfaces/purchased-product';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductListComponent {
  @Input() purchasedProducts: PurchasedProduct[];
  @Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() addProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeAllProducts: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private cartService: CartServiceService
  ) { }

  onRemoveProduct(productId: string){
    this.removeProduct.emit(productId);
  }

  onAddProduct(productId: string){
    this.addProduct.emit(productId)
  }

  onRemoveAllProducts(productId: string){
    this.removeAllProducts.emit(productId);
  }

  getTotalCost(): number {
    return this.cartService.getProductsTotalCost();
  }

  getTotalProducts(): number {
    return this.cartService.getProductsInCartCount();
  }
}
