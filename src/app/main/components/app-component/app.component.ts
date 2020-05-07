import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/cart/services/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular9Course1';

  constructor(
    public cartService: CartServiceService
  ){
  }
}
