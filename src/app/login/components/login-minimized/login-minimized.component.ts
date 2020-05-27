import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-minimized',
  templateUrl: './login-minimized.component.html',
  styleUrls: ['./login-minimized.component.scss']
})
export class LoginMinimizedComponent {

  constructor(
    public loginService: LoginService
  ) { }

  loginAsAdmin() {
    this.loginService.loginAsAdmin();
  }

  Logout() {
    this.loginService.Logout();
  }
}
