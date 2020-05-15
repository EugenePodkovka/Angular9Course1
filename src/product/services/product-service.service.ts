import { Injectable } from '@angular/core';
import { Product } from 'src/shared/interfaces/product';
import { GuidHelperService } from 'src/shared/services/guid-helper/guid-helper.service';
import { CartServiceService } from 'src/cart/services/cart-service.service';
import { ProductInStock } from 'src/shared/interfaces/product-in-stock';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private cartService: CartServiceService,
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
    this.cartService.addProductToCart(product);
  }
}
