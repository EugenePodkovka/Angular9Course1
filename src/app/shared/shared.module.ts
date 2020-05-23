import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DynamicBackgroundDirective } from './directives/dynamic-background.directive';
import { ClickBorderDirective } from './directives/click-border.directive';
import { OrderByPipe } from './pipes';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

const mat = [
  MatSelectModule,
  MatCheckboxModule,
  MatCardModule
];

@NgModule({
  declarations: [
    FirstComponentComponent,
    DynamicBackgroundDirective,
    ClickBorderDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    mat
  ],
  exports: [
    FirstComponentComponent,
    DynamicBackgroundDirective,
    ClickBorderDirective,
    FormsModule,
    mat,
    OrderByPipe,
    CommonModule
  ]
})
export class SharedModule { }
