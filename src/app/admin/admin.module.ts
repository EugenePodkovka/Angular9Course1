import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
