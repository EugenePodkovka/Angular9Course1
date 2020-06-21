import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  // TODO change to storing in constants
  keys = {
    purchasedProducts: 'PurchasedProducts',
    loginInfo: 'LoginInfo',
    productsInDb: 'productsInDb',
    orderClientData: 'OrderClientData',
    appSettings: 'appSettings'
  };

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify({val: value}));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key))?.val;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clearAll() {
    localStorage.clear();
  }
}
