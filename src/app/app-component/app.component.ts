import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/services/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle', {static: true}) appTitleHeader: ElementRef;

  constructor(
    public cartService: CartServiceService
  ){
  }

  ngOnInit(){
    this.appTitleHeader.nativeElement.textContent = 'Angular 9 applition';
  }
}
