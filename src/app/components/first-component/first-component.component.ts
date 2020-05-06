import { Component, OnInit } from '@angular/core';

enum ProductCategory{
  Toys,
  Food,
  Drink
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string | undefined;
  description: string | undefined;
  price: number | 0;
  category: ProductCategory | undefined;
  isAvailable: boolean | true;

  constructor() { }

  ngOnInit(): void {
    this.name = 'First component name';
    this.description = 'First component description';
    this.price = this.setPrice();
    this.category = ProductCategory.Food;
    this.isAvailable = true;
  }

  setPrice(){
    return 10;
  }

  getProductCategories(){
    return Object.values(ProductCategory).filter((type) => typeof(type) === 'number');
  }

  getProductCategoryString(catValue){
    return ProductCategory[catValue];
  }

  onBtnClick(){
    this.category = ProductCategory.Drink;
    console.log(this.category);
  }
}
