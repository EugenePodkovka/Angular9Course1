import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { PurchasedProduct } from '../../shared/interfaces/purchased-product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  purchasedProducts: PurchasedProduct[];
  isCartOpen: boolean | false;

  constructor() {
    this.purchasedProducts = [];
  }

  addProductToCart(productToAdd: Product) {
    if (this.purchasedProducts.findIndex(pp => pp.Product.Id === productToAdd.Id) === -1){
      this.purchasedProducts.push({
        Product: productToAdd,
        Count: 1
      } as PurchasedProduct);
    }else{
      this.purchasedProducts.find(pp => pp.Product.Id === productToAdd.Id).Count += 1;
    }
  }

  removeOneProductFromCart(productId: string) {
    const productToRemove = this.purchasedProducts.find(pp => pp.Product.Id === productId);
    if (productToRemove.Count > 1){
      productToRemove.Count -= 1;
    }else{
      this.purchasedProducts = this.purchasedProducts.filter(pp => pp.Product.Id !== productToRemove.Product.Id);
    }
  }

  removeAllOneProduct(productId: string) {
    this.purchasedProducts = this.purchasedProducts.filter(pp => pp.Product.Id !== productId)
  }

  addOneProduct(productId: string) {
    this.purchasedProducts.find(pp => pp.Product.Id === productId).Count += 1;
  }

  openCart(){
    this.isCartOpen = true;
  }

  closeCart(){
    this.isCartOpen = false;
  }

  getProductsInCartCount(): number {
    return this.purchasedProducts.reduce((sum, val, index) => sum += val.Count, 0);
  }

  getProductsTotalCost(): number {
    return this.purchasedProducts.reduce((acc, val) => acc + val.Product.Price * val.Count, 0);
  }
}
