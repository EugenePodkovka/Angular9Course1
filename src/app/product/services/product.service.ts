import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable, Subscriber, throwError } from 'rxjs';
import { GuidHelperService, AppSettingsService } from 'src/app/shared/services';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, switchMap, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private cartService: CartService,
    private guidHelperService: GuidHelperService,
    private http: HttpClient,
    private appSettings: AppSettingsService
  ) { }

  getProducts(): Observable<Product[]> {
    return this.appSettings.get('serverURL').pipe(
      switchMap(serverUrl => this.http.get<Product[]>(serverUrl + '/Product')),
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
    this.http.put('http://localhost:3000/Product/' + product.Id, product).subscribe();
  }

  createProduct(product: Product) {
    this.http.post('http://localhost:3000/Product', product).subscribe();
  }

  getNewProduct() {
    return {
      Id: this.guidHelperService.NewGuid()
    } as Product;
  }
}
