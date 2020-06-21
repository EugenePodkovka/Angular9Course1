import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  onClearLocalStorageBtnClick() {
    this.localStorageService.clearAll();
  }

}
