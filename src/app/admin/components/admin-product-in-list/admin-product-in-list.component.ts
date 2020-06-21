import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/product/services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-product-in-list',
  templateUrl: './admin-product-in-list.component.html',
  styleUrls: ['./admin-product-in-list.component.scss']
})
export class AdminProductInListComponent {
  @Input() product: Product;
  @Output() listChanged: EventEmitter<any> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  onSaveClick() {
    this.productService.updateProduct(this.product);
    this.cartService.savePurchasedProducts();
    this.showSaveCompletedPopup();
  }

  onRemoveClick() {
    this.productService.deleteProduct(this.product, () => {
      this.listChanged.emit();
      this.showDeleteCompletedPopup();
    });
  }

  showSaveCompletedPopup() {
    this.snackBar.open('Product saved!', 'Save product', {
      duration: 2000
    });
  }

  showDeleteCompletedPopup() {
    this.snackBar.open('Product deleted!', 'Delete product', {
      duration: 2000
    });
  }
}
