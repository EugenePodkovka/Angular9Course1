import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';

enum ProductSearchStatus{
  Undefined,
  Found,
  NotFound
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: Product = {} as Product;
  testValue: string;
  productIdUrlParam: string;
  public productSearchStatus: ProductSearchStatus = ProductSearchStatus.Undefined;
  productTotalRemaining: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService
  ) {
    this.productIdUrlParam = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productIdUrlParam).subscribe((p) => {
      this.product = p;
      this.productSearchStatus = p ? ProductSearchStatus.Found : ProductSearchStatus.NotFound;
      if (this.productSearchStatus === ProductSearchStatus.Found) {
        this.productService.getProductTotalRemaining(p.Id).subscribe((totalRemaining => {
          this.productTotalRemaining = totalRemaining;
        }));
      }
    });
    // TODO why this does not work?
    // this.productService.getProduct(productId).toPromise().then(val => console.log(val));
  }

  isProductFound() {
    return this.productSearchStatus === ProductSearchStatus.Found;
  }

  isProductNotFound() {
    return this.productSearchStatus === ProductSearchStatus.NotFound;
  }
}
