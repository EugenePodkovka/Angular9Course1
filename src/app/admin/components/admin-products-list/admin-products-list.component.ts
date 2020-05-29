import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/services/product.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss']
})
export class AdminProductsListComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  private initializeProducts() {
    this.products = this.productService.getProducts();
  }

}
