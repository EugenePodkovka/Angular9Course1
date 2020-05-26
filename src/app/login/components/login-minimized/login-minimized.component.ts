import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-login-minimized',
  templateUrl: './login-minimized.component.html',
  styleUrls: ['./login-minimized.component.scss']
})
export class LoginMinimizedComponent implements OnInit {
  user: User;
  isLoggedIn = false;
  isAdmin = false;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      Name: 'Admin'
    } as User;
  }

  loginAsAdmin() {
    this.isLoggedIn = true;
    this.isAdmin = true;
  }

  Logout() {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}
