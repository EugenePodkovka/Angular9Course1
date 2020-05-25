import { Injectable, DoCheck } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { PurchasedProduct } from '../../shared/interfaces/purchased-product';
import { LocalStorageService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  purchasedProducts: PurchasedProduct[];
  totalQuantity: number;
  totalSum: number;
  isCartOpen: boolean | false;

  private ppLocalStorageKey = 'PurchasedProducts';

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.loadPurchasedProducts();
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
    this.savePurchasedProducts();
  }

  removeProduct(productId: string) {
    this.purchasedProducts = this.purchasedProducts.filter(pp => pp.Product.Id !== productId);
    this.savePurchasedProducts();
  }

  increaseQuantity(productId: string) {
    this.purchasedProducts.find(pp => pp.Product.Id === productId).Count += 1;
    this.savePurchasedProducts();
  }

  decreaseQuantity(productId: string) {
    const productToRemove = this.purchasedProducts.find(pp => pp.Product.Id === productId);
    if (productToRemove.Count > 1){
      productToRemove.Count -= 1;
    }else{
      this.purchasedProducts = this.purchasedProducts.filter(pp => pp.Product.Id !== productToRemove.Product.Id);
    }
    this.savePurchasedProducts();
  }

  removeAllProducts() {
    this.purchasedProducts = [];
    this.savePurchasedProducts();
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

  savePurchasedProducts() {
    this.localStorageService.setItem(this.ppLocalStorageKey, this.purchasedProducts);
  }

  loadPurchasedProducts() {
    const storedPP = this.localStorageService.getItem(this.ppLocalStorageKey);
    this.purchasedProducts = storedPP == null ? [] : storedPP;
  }
}
