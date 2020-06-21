import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent {
  product: Product = {} as Product;
  productIdUrlParam: string;
  isNewMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {
    this.initializeProduct();
  }

  onSaveClick() {
    if (this.isNewMode) {
      this.productService.createProduct(this.product);
      this.isNewMode = false;
      this.showProductCreatedPopup();
    } else {
      this.productService.updateProduct(this.product);
      this.cartService.savePurchasedProducts();
      this.showProductUpdatedPopup();
    }
  }

  showProductCreatedPopup() {
    this.snackBar.open('Product created', 'Save product', {
      duration: 2000
    });
  }

  showProductUpdatedPopup() {
    this.snackBar.open('Product updated', 'Save product', {
      duration: 2000
    });
  }

  initializeProduct() {
    this.productIdUrlParam = this.route.snapshot.paramMap.get('id');
    if (this.productIdUrlParam == null) {
      this.isNewMode = true;
      this.createNewProduct();
    } else {
      this.isNewMode = false;
      this.setProduct();
    }
  }

  setProduct() {
    this.productService.getProduct(this.productIdUrlParam).subscribe((p) => {
      this.product = p;
    });

    // TODO why this does not work?
    // this.productService.getProduct(this.productIdUrlParam).toPromise().then(val => console.log(val));
  }

  createNewProduct() {
    this.product = this.productService.getNewProduct();
  }
}
