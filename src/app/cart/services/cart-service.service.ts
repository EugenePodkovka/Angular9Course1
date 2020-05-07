import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  purchasedProducts: Product[];
  isCartOpen: boolean | false;

  constructor() {
    this.purchasedProducts = [];
  }

  addProductToCart(product: Product){
    this.purchasedProducts.push(product);
  }

  openCart(){
    this.isCartOpen = true;
  }

  closeCart(){
    this.isCartOpen = false;
  }
}
