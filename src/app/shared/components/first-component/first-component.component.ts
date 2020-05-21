import { Component, OnInit, Inject } from '@angular/core';
import { LocalStorageService, ConstantsService, csInstance, RandomStrLen, GeneratorFactory, GeneratorService } from 'src/app/core/services';

enum ProductCategory{
  Toys,
  Food,
  Drink
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
  providers: [
    { provide: ConstantsService, useValue: csInstance },
    { provide: RandomStrLen, useFactory: GeneratorFactory(5), deps: [GeneratorService] }
  ]
})
export class FirstComponentComponent implements OnInit {
  name: string;
  description: string;
  price: number | 0;
  category: ProductCategory;
  isAvailable = true;
  constantContent: {App: string, Ver: string};

  constructor(
    @Inject(RandomStrLen) public randomStrLen: string,
    private localStorageService: LocalStorageService,
    private csIn: ConstantsService
  ) { }

  ngOnInit(): void {
    this.name = 'First component name';
    this.description = 'First component description';
    this.price = this.setPrice();
    this.category = ProductCategory.Food;
    this.constantContent = this.csIn.getAllData();
  }

  onTestLocalStorageBtnClick() {
    this.localStorageService.setItem('test', {val: 'testStringObj'});
    this.localStorageService.setItem('test1', 111);
    this.localStorageService.setItem('test2', 'testString');

    console.log(this.localStorageService.getItem('test'));
    console.log(this.localStorageService.getItem('test1'));
    console.log(this.localStorageService.getItem('test2'));
  }

  onBtnClick() {
    this.category = ProductCategory.Drink;
    console.log(this.category);
  }

  setPrice() {
    return 10;
  }

  getProductCategories() {
    return Object.values(ProductCategory).filter((type) => typeof(type) === 'number');
  }

  getProductCategoryString(catValue) {
    return ProductCategory[catValue];
  }
}
