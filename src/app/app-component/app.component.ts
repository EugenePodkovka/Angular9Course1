import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle', {static: true}) appTitleHeader: ElementRef;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  constructor(
    public cartService: CartService
  ){
  }

  ngOnInit(){
    this.appTitleHeader.nativeElement.textContent = 'Angular 9 applition';
  }
}
