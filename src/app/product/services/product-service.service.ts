import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { GuidHelperService } from 'src/app/shared/services/guid-helper/guid-helper.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductInStock } from 'src/app/shared/interfaces/product-in-stock';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private cartService: CartService,
    private guidHelperService: GuidHelperService
  ) { }

  getProductsInStock(): ProductInStock[] {
    const products = [
      {
        Id: this.guidHelperService.NewGuid(),
        Product: {
          Id: this.guidHelperService.NewGuid(),
          Name: 'Product0',
          Price: 10
        } as Product,
        Remaining: 0
      } as ProductInStock,
      {
        Id: this.guidHelperService.NewGuid(),
        Product: {
          Id: this.guidHelperService.NewGuid(),
          Name: 'Product1',
          Price: 100
        } as Product,
        Remaining: 1
      } as ProductInStock,
      {
        Id: this.guidHelperService.NewGuid(),
        Product: {
          Id: this.guidHelperService.NewGuid(),
          Name: 'Product2',
          Price: 200
        } as Product,
        Remaining: 2
      } as ProductInStock,
    ];
    return products;
  }

  buyProduct(product: Product) {
    console.log(`The product Name=\"${product.Name}\", Id=\"${product.Id}\" has been purchased.`);
    this.cartService.addProduct(product);
  }
}
