import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product/services/product-service.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

enum ProductSearchStatus {
  Undefined,
  Found,
  NotFound
}

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss']
})
export class AdminProductEditComponent {
  product: Product = {} as Product;
  testValue: string;
  productIdUrlParam: string;
  public productSearchStatus: ProductSearchStatus = ProductSearchStatus.Undefined;
  productTotalRemaining: number;
  isAllProductDataLoaded: boolean;
  isNewMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {
    this.initializeProduct();
  }

  onSaveClick() {
    if (this.isNewMode === false) {
      this.productService.updateProductInStock(this.product, this.productTotalRemaining);
    } else if (this.isNewMode === true) {
      this.productService.addNewProductInStock(this.product, this.productTotalRemaining);
    }
    this.cartService.savePurchasedProducts();
    this.isNewMode = undefined;
    this.showProductSavedPopup();
  }

  showProductSavedPopup() {
    this.snackBar.open('Product saved', 'Save product', {
      duration: 2000
    });
  }

  initializeProduct() {
    this.productIdUrlParam = this.route.snapshot.paramMap.get('id');
    if (this.productIdUrlParam == null) {
      this.isNewMode = true;
      this.createNewProduct();
      this.isAllProductDataLoaded = this.productSearchStatus === ProductSearchStatus.Found;
    } else {
      this.isNewMode = false;
      this.setProduct((p: Product) => {
        this.setTotalRemaining(p, () => {
          this.isAllProductDataLoaded = this.productSearchStatus === ProductSearchStatus.Found;
        });
      });
    }
  }

  setProduct(callback?: (p: Product) => any) {
    this.productService.getProduct(this.productIdUrlParam).subscribe((p) => {
      this.product = p;
      this.productSearchStatus = p ? ProductSearchStatus.Found : ProductSearchStatus.NotFound;
      callback?.call(this, p);
    });

    // TODO why this does not work?
    // this.productService.getProduct(productId).toPromise().then(val => console.log(val));
  }

  setTotalRemaining(p: Product, callback?: () => any) {
    if (this.productSearchStatus === ProductSearchStatus.Found) {
      this.productService.getProductTotalRemaining(p.Id).subscribe((totalRemaining => {
        this.productTotalRemaining = totalRemaining;
        callback?.call(this);
      }));
    }
  }

  createNewProduct() {
    this.product = this.productService.getNewProduct();
    this.productSearchStatus = ProductSearchStatus.Found;
  }
}
