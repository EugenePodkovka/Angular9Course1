import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CurrentUser } from 'src/app/shared/classes/current-user';

@Component({
  selector: 'app-login-minimized',
  templateUrl: './login-minimized.component.html',
  styleUrls: ['./login-minimized.component.scss']
})
export class LoginMinimizedComponent {

  constructor(
    public loginService: LoginService,
    public currentUser: CurrentUser
  ) {
    this.loginService.updateCurrentUserFromLocalStorage();
  }

  loginAsAdmin() {
    this.loginService.loginAsAdmin();
  }

  Logout() {
    this.loginService.Logout();
  }
}
