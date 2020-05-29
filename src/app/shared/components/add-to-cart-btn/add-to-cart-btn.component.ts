import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.scss']
})
export class AddToCartBtnComponent {
  @Input() product: Product;

  constructor(
    private productService: ProductService
  ) { }

  onBuyClick() {
    this.productService.buyProduct(this.product);
  }

  isProductFound(): boolean {
    return (this.product?.Id) ? true : false;
  }

  isProductAvailable(): boolean {
    return this.isProductFound() && (this.product.Remaining > 0);
  }

}
