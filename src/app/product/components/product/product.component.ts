import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { Location } from '@angular/common';

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
export class ProductComponent implements OnInit {
  product: Product = {} as Product;
  testValue: string;
  productIdUrlParam: string;
  public productSearchStatus: ProductSearchStatus = ProductSearchStatus.Undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService,
    private location: Location
  ) {
    this.productIdUrlParam = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productIdUrlParam).subscribe((p) => {
      this.product = p;
      this.productSearchStatus = p ? ProductSearchStatus.Found : ProductSearchStatus.NotFound;
    });
    //TODO why this does not work?
    //this.productService.getProduct(productId).toPromise().then(val => console.log(val));
  }

  ngOnInit(): void {

  }

  onBackClick() {
    this.location.back();
  }

  onAddToCartClick() {
    this.onProductPurchased(this.product);
  }

  onProductPurchased(product: Product){
    this.productService.buyProduct(product);
  }

  isProductFound() {
    return this.productSearchStatus === ProductSearchStatus.Found;
  }

  isProductNotFound() {
    return this.productSearchStatus === ProductSearchStatus.NotFound;
  }
}
