import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable, Subscriber } from 'rxjs';
import { LocalStorageService, GuidHelperService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsInDb = [
    {
      Id: this.guidHelperService.NewGuid(),
      Name: 'Product0',
      Price: 10,
      Remaining: 0
    } as Product,
    {
      Id: this.guidHelperService.NewGuid(),
      Name: 'Product1',
      Price: 110,
      Remaining: 1
    } as Product,
    {
      Id: this.guidHelperService.NewGuid(),
      Name: 'Product2',
      Price: 120,
      Remaining: 2
    } as Product
  ];
  private httpEmulator = new Observable((observer: Subscriber<Product[]>) => {
    setTimeout(() => {
      observer.next(this.productsInDb);
    }, 500);
  });

  constructor(
    private cartService: CartService,
    private guidHelperService: GuidHelperService,
    private localStorageService: LocalStorageService
  ) {
    this.updateProductsFromLocalStorage();
  }

  getProducts(): Observable<Product[]> {
    return this.httpEmulator;
  }

  getProduct(productId: string): Observable<Product> {
    return new Observable((obs: Subscriber<Product>) => {
      this.httpEmulator.subscribe(product => {
        obs.next(
          product.find(p => p.Id === productId)
        );
      });
    });
  }

  // TODO change to storage in DB
  buyProduct(product: Product) {
    console.log(`The product Name=\"${product.Name}\", Id=\"${product.Id}\" has been purchased.`);
    this.cartService.addProduct(product);
  }

  updateProductsFromLocalStorage() {
    const storedProducts = this.localStorageService.getItem(this.localStorageService.keys.productsInDb);
    if (storedProducts == null) {
      this.localStorageService.setItem(this.localStorageService.keys.productsInDb, this.productsInDb);
    } else {
      this.productsInDb = storedProducts;
    }
  }

  saveProductsToLocalStorage() {
    this.localStorageService.setItem(this.localStorageService.keys.productsInDb, this.productsInDb);
  }

  updateProduct(product: Product) {
    const productInDbIndex = this.productsInDb.findIndex(p => p.Id === product.Id);
    if (productInDbIndex !== -1) {
      this.productsInDb[productInDbIndex] = product;
      this.saveProductsToLocalStorage();
    }
  }

  createProduct(product: Product) {
    this.productsInDb.push(product);
    this.saveProductsToLocalStorage();
  }

  getNewProduct() {
    return {
      Id: this.guidHelperService.NewGuid()
    } as Product;
  }
}
