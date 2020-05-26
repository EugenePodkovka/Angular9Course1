import { Component, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductServiceService } from 'src/app/product/services/product-service.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-product-in-list',
  templateUrl: './admin-product-in-list.component.html',
  styleUrls: ['./admin-product-in-list.component.scss']
})
export class AdminProductInListComponent {
  @Input() product: Product;
  @Input() productRemaining: number;

  constructor(
    private productService: ProductServiceService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  onSaveClick() {
    this.productService.updateProductInStock(this.product, this.productRemaining);
    this.cartService.savePurchasedProducts();
    this.showSaveCompletedPopup();
  }

  showSaveCompletedPopup() {
    this.snackBar.open('Product saved!', 'Save product', {
      duration: 2000
    });
  }
}
