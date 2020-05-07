import { Injectable } from '@angular/core';
import { Product } from 'src/product/interfaces/Product';
import { PurchasedProduct } from '../interfaces/purchased-product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  purchasedProducts: PurchasedProduct[];
  isCartOpen: boolean | false;

  constructor() {
    this.purchasedProducts = [];
  }

  addProductToCart(productToAdd: Product){
    if (this.purchasedProducts.findIndex(pp => pp.product.id === productToAdd.id) === -1){
      this.purchasedProducts.push({
        product: productToAdd,
        count: 1
      } as PurchasedProduct);
    }else{
      this.purchasedProducts.find(pp => pp.product.id === productToAdd.id).count += 1;
    }
  }

  removeOneProductFromCart(productId: string){
    const productToRemove = this.purchasedProducts.find(pp => pp.product.id === productId);
    if (productToRemove.count > 1){
      productToRemove.count -= 1;
    }else{
      this.purchasedProducts = this.purchasedProducts.filter(pp => pp.product.id !== productToRemove.product.id);
    }
  }

  openCart(){
    this.isCartOpen = true;
  }

  closeCart(){
    this.isCartOpen = false;
  }

  getProductsInCartCount(): number{
    return this.purchasedProducts.reduce((sum, val, index) => sum += val.count, 0);
  }
}
