import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-in-list-component',
  templateUrl: './product-in-list-component.component.html',
  styleUrls: ['./product-in-list-component.component.scss']
})
export class ProductInListComponentComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(
    private productService: ProductServiceService
  ) { }

  ngOnInit(): void {
  }

  onBuy() {
    this.productService.buyProduct(this.product);
  }

}
