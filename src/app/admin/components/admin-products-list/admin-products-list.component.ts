import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInStock } from 'src/app/shared/interfaces/product-in-stock';
import { ProductServiceService } from 'src/app/product/services/product-service.service';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss']
})
export class AdminProductsListComponent implements OnInit {
  productsInStock: Observable<ProductInStock[]>;
  constructor(
    private productService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  private initializeProducts() {
    this.productsInStock = this.productService.getProductsInStock();
  }

}
