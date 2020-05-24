import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ProductServiceService } from 'src/app/product/services/product-service.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.scss']
})
export class AddToCartBtnComponent implements DoCheck {
  @Input() product: Product;
  @Input() isProductAvailable?: boolean;
  isBuyBtnHover = false;

  constructor(
    private productService: ProductServiceService
  ) { }

  ngDoCheck(): void {
    if (this.isProductAvailable === undefined && this.isProductFound()) {
      this.getProductAvailability(this.product.Id);
    }
  }

  onBuyClick(){
    this.productService.buyProduct(this.product);
  }

  onBuyBtnMouseOver(){
    this.isBuyBtnHover = true;
  }

  onBuyBtnMouseOut(){
    this.isBuyBtnHover = false;
  }

  getProductAvailability(productId: string) {
    this.productService.getProductTotalRemaining(productId).subscribe(totalRemaining => {
      this.isProductAvailable = totalRemaining > 0;
    });
  }

  isProductFound(): boolean {
    return (this.product?.Id) ? true : false;
  }

}
