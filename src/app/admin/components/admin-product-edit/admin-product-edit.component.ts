import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product/services/product-service.service';
import { CartService } from 'src/app/cart/services/cart.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService,
    private cartService: CartService
  ) {
    this.setProduct((p: Product) => {
      this.setTotalRemaining(p, () => {
        this.isAllProductDataLoaded = this.productSearchStatus === ProductSearchStatus.Found;
      });
    });
  }

  onSaveClick() {
    this.productService.updateProductInStock(this.product, this.productTotalRemaining);
    this.cartService.savePurchasedProducts();
  }

  setProduct(callback?: (p: Product) => any) {
    this.productIdUrlParam = this.route.snapshot.paramMap.get('id');
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
}
