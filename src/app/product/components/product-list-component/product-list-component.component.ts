import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/shared/interfaces/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  onProductPurchased(product: Product){
    this.productService.buyProduct(product);
  }

  private initializeProducts() {
    this.products = this.productService.getProducts();
  }

}
