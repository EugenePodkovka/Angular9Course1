import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  isAdmin = false;
  currentUser: User;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  initTestAdminUser() {
    this.currentUser = {
      Name: 'Admin'
    } as User;
  }

  Logout() {
    this.currentUser = null;
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/home']);
  }

  loginAsAdmin() {
    this.initTestAdminUser();
    this.isLoggedIn = true;
    this.isAdmin = true;
  }
}
