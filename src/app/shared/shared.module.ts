import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatModule } from './mat.module';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DynamicBackgroundDirective } from './directives/dynamic-background.directive';
import { ClickBorderDirective } from './directives/click-border.directive';
import { OrderByPipe } from './pipes';
import { CardMainNavPanelComponent } from './components/card-main-nav-panel/card-main-nav-panel.component';
import { MainContentCardComponent } from './components/main-content-card/main-content-card.component';
import { AddToCartBtnComponent } from './components/add-to-cart-btn/add-to-cart-btn.component';

const declExp = [
  CardMainNavPanelComponent,
  OrderByPipe,
  ClickBorderDirective,
  DynamicBackgroundDirective,
  FirstComponentComponent,
  MainContentCardComponent,
  AddToCartBtnComponent
];
const impExp = [
  CommonModule,
  FormsModule,
  RouterModule,
  MatModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [
    declExp
  ],
  imports: [
    impExp
  ],
  exports: [
    declExp,
    impExp
  ]
})
export class SharedModule { }
