import { Injectable } from '@angular/core';
import { Product } from 'src/shared/interfaces/product';
import { GuidHelperService } from 'src/shared/services/guid-helper/guid-helper.service';
import { CartServiceService } from 'src/cart/services/cart-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private cartService: CartServiceService,
    private guidHelperService: GuidHelperService
  ) { }

  getProducts(): Product[] {
    const products = [
      {
        Id: this.guidHelperService.NewGuid(),
        Name: 'Product1',
        Price: 100
      } as Product,
      {
        Id: this.guidHelperService.NewGuid(),
        Name: 'Product2',
        Price: 200
      } as Product,
      {
        Id: this.guidHelperService.NewGuid(),
        Name: 'Product3',
        Price: 300
      } as Product,
    ];
    return products;
  }

  buyProduct(product: Product) {
    console.log(`The product Name=\"${product.Name}\", Id=\"${product.Id}\" has been purchased.`);
    this.cartService.addProductToCart(product);
  }
}
