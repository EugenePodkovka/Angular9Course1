import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-main-nav-panel',
  templateUrl: './card-main-nav-panel.component.html',
  styleUrls: ['./card-main-nav-panel.component.scss']
})
export class CardMainNavPanelComponent {

  constructor(
    private location: Location
  ){ }

  onBackClick() {
    this.location.back();
  }

}
