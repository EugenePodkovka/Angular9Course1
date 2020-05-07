import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/interfaces/Product';
import { GuidHelperService } from 'src/app/shared/guid-helper/guid-helper.service';
import { CartServiceService } from 'src/app/cart/services/cart-service.service';

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
        id: this.guidHelperService.NewGuid(),
        name: 'Product1',
        price: 100
      } as Product,
      {
        id: this.guidHelperService.NewGuid(),
        name: 'Product2',
        price: 200
      } as Product,
      {
        id: this.guidHelperService.NewGuid(),
        name: 'Product3',
        price: 300
      } as Product,
    ];
    return products;
  }

  buyProduct(product: Product) {
    console.log(`The product Name=\"${product.name}\", Id=\"${product.id}\" has been purchased.`);
    this.cartService.addProductToCart(product);
  }
}
