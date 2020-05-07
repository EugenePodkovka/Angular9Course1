import { Component } from '@angular/core';
import { CartServiceService } from '../../../cart/services/cart-service.service';

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
