import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { GuidHelperService } from 'src/app/shared/services/guid-helper/guid-helper.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductInStock } from 'src/app/shared/interfaces/product-in-stock';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productsInDb = [
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
        Price: 200
      } as Product,
      Remaining: 1
    } as ProductInStock,
    {
      Id: this.guidHelperService.NewGuid(),
      Product: {
        Id: this.guidHelperService.NewGuid(),
        Name: 'Product2',
        Price: 100
      } as Product,
      Remaining: 2
    } as ProductInStock,
  ];
  private httpEmulator = new Observable((observer: Subscriber<ProductInStock[]>) => {
    setTimeout(() => {
      observer.next(this.productsInDb);
    }, 2000);
  });

  constructor(
    private cartService: CartService,
    private guidHelperService: GuidHelperService
  ) { }

  getProductTotalRemaining(productId: string): Observable<number> {
    return new Observable((obs: Subscriber<number>) =>
      this.getProductsInStock(productId).subscribe(
        pis => obs.next(pis.reduce((sum, val) => sum += val.Remaining, 0))
      ));
  }

  getProductsInStock(productId?: string): Observable<ProductInStock[]> {
    if (productId){
      return new Observable((o: Subscriber<ProductInStock[]>) => {
        this.httpEmulator.subscribe(productInStock =>
          o.next(productInStock.filter(pis => pis.Product.Id === productId)));
      });
    }else{
      return this.httpEmulator;
    }
  }

  buyProduct(product: Product) {
    console.log(`The product Name=\"${product.Name}\", Id=\"${product.Id}\" has been purchased.`);
    this.cartService.addProduct(product);
  }

  getProduct(productId: string): Observable<Product> {
    return new Observable((obs: Subscriber<Product>) => {
      this.httpEmulator.subscribe(productsInStock => {
        obs.next(
          productsInStock.find(pis => pis.Product.Id === productId)?.Product
        );
      });
    });
  }

}
