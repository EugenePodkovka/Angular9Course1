import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductInStock } from 'src/app/shared/interfaces/product-in-stock';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  productsInStock: ProductInStock[];

  constructor(
    private productServiceService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts() {
    this.productsInStock = this.productServiceService.getProductsInStock();
  }

  onProductPurchased(product: Product){
    this.productServiceService.buyProduct(product);
  }

}
