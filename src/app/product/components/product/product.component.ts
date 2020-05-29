import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';

enum ProductSearchStatus {
  Undefined,
  Found,
  NotFound
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {} as Product;
  testValue: string;
  productIdUrlParam: string;
  public productSearchStatus: ProductSearchStatus = ProductSearchStatus.Undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productIdUrlParam = this.route.snapshot.paramMap.get('id');
    const receivedProduct = this.route.snapshot.data.productData?.product;
    if (receivedProduct == null) {
      this.productSearchStatus = ProductSearchStatus.NotFound;
    } else {
      this.product = receivedProduct;
      this.productSearchStatus = ProductSearchStatus.Found;
    }
  }

  isProductFound() {
    return this.productSearchStatus === ProductSearchStatus.Found;
  }

  isProductNotFound() {
    return this.productSearchStatus === ProductSearchStatus.NotFound;
  }

  isProductAvailable() {
    return this.product?.Remaining > 0;
  }
}
