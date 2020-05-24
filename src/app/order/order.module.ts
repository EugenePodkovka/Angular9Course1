import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderFirstStepComponent } from './components/order-first-step/order-first-step.component';



@NgModule({
  declarations: [
    OrderFirstStepComponent
  ],
  imports: [
    SharedModule
  ]
})
export class OrderModule { }
