import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/shared/classes/current-user';
import { CurrentUserBase } from 'src/app/shared/global-variables/current-user';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private currentUser: CurrentUser,
    private localStorageService: LocalStorageService,
    private router: Router,
    private location: Location
  ) { }

  Logout() {
    this.localStorageService.removeItem(this.localStorageService.keys.loginInfo);
    this.location.go(this.router.createUrlTree(['/home']).toString());
    window.location.reload();
  }

  loginAsAdmin() {
    this.currentUser.data.Name = 'Admin';
    this.currentUser.isAdmin = true;
    this.currentUser.isLoggedIn = true;
    this.saveCurrentUserToLocalStorage();
  }

  saveCurrentUserToLocalStorage() {
    this.localStorageService.setItem(this.localStorageService.keys.loginInfo, this.currentUser);
  }

  updateCurrentUserFromLocalStorage() {
    const storedUserData = this.localStorageService.getItem(this.localStorageService.keys.loginInfo) as CurrentUserBase;
    if(storedUserData){
      this.currentUser.data.Name = storedUserData.data.Name;
      this.currentUser.isLoggedIn = storedUserData.isLoggedIn;
      this.currentUser.isAdmin = storedUserData.isAdmin;
    }
  }


}
