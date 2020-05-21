import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DynamicBackgroundDirective } from './directives/dynamic-background.directive';
import { ClickBorderDirective } from './directives/click-border.directive';



@NgModule({
  declarations: [
    FirstComponentComponent,
    DynamicBackgroundDirective,
    ClickBorderDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FirstComponentComponent,
    DynamicBackgroundDirective,
    ClickBorderDirective
  ]
})
export class SharedModule { }
