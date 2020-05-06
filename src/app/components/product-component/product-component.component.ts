import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {
  name: string | undefined;
  description: string | undefined;
  price: number | 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    console.log(`The product Name=\\"${name}\\" has been purchased.`);
  }

}
