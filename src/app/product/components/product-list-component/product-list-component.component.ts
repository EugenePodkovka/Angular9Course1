import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  products: Product[] | undefined;  // ? почему undefined

  constructor(
    private productServiceService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts() {
    this.products = this.productServiceService.getProducts();
  }

}
