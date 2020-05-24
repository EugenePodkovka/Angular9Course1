import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { PurchasedProduct } from '../../shared/interfaces/purchased-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  purchasedProducts: PurchasedProduct[];
  totalQuantity: number;
  totalSum: number;
  isCartOpen: boolean | false;

  constructor() {
    this.purchasedProducts = [];
  }

  addProduct(productToAdd: Product, quantity: number = 1) {
    if (this.purchasedProducts.findIndex(pp => pp.Product.Id === productToAdd.Id) === -1){
      this.purchasedProducts.push({
        Product: productToAdd,
        Count: quantity
      } as PurchasedProduct);
    }else{
      this.purchasedProducts.find(pp => pp.Product.Id === productToAdd.Id).Count += quantity;
    }
  }

  removeProduct(productId: string) {
    this.purchasedProducts = this.purchasedProducts.filter(pp => pp.Product.Id !== productId);
  }

  increaseQuantity(productId: string) {
    this.purchasedProducts.find(pp => pp.Product.Id === productId).Count += 1;
  }

  decreaseQuantity(productId: string) {
    const productToRemove = this.purchasedProducts.find(pp => pp.Product.Id === productId);
    if (productToRemove.Count > 1){
      productToRemove.Count -= 1;
    }else{
      this.purchasedProducts = this.purchasedProducts.filter(pp => pp.Product.Id !== productToRemove.Product.Id);
    }
  }

  removeAllProducts() {
    this.purchasedProducts = [];
  }

  openCart(){
    this.isCartOpen = true;
  }

  closeCart(){
    this.isCartOpen = false;
  }

  getProductsInCartCount(): number {
    return this.purchasedProducts.reduce((sum, val) => sum += val.Count, 0);
  }

  getProductsTotalCost(): number {
    return this.purchasedProducts.reduce((acc, val) => acc + val.Product.Price * val.Count, 0);
  }

  updateCartData() {
    this.totalQuantity = this.getProductsInCartCount();
    this.totalSum = this.getProductsTotalCost();
  }
}
