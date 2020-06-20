import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable, Subscriber, throwError } from 'rxjs';
import { GuidHelperService, AppSettingsService, HttpClientService } from 'src/app/shared/services';
import { map, mergeMap, switchMap, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private cartService: CartService,
    private guidHelperService: GuidHelperService,
    private httpService: HttpClientService,
    private appSettings: AppSettingsService
  ) { }

  getProducts(): Observable<Product[]> {
    return this.appSettings.get('serverURL').pipe(
      switchMap(serverUrl => this.httpService.read<Product[]>(serverUrl + '/Product')),
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }


  getProduct(productId: string): Observable<Product> {
    return new Observable((obs: Subscriber<Product>) => {
      this.getProducts().subscribe(product => {
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

  updateProduct(product: Product) {
    this.appSettings.get('serverURL').pipe(
      switchMap(serverUrl => this.httpService.update<Product>(serverUrl + '/Product/' + product.Id, product))
    ).subscribe();
  }

  createProduct(product: Product) {
    this.appSettings.get('serverURL').pipe(
      switchMap(serverUrl => this.httpService.create<Product>(serverUrl + '/Product', product))
    ).subscribe();
  }

  deleteProduct(product: Product) {
    this.appSettings.get('serverURL').toPromise()
      .then(serverUrl => this.httpService.delete<Product>(serverUrl + '/Product/' + product.Id));
  }

  getNewProduct() {
    return {
      Id: this.guidHelperService.NewGuid()
    } as Product;
  }
}
