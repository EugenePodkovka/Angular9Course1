import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-in-list-component',
  templateUrl: './product-in-list-component.component.html',
  styleUrls: ['./product-in-list-component.component.scss']
})
export class ProductInListComponentComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    console.log(`The product Name=\\"${this.product.name}\\" has been purchased.`);
  }

}
