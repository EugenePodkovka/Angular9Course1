import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-content-card',
  templateUrl: './main-content-card.component.html',
  styleUrls: ['./main-content-card.component.scss']
})
export class MainContentCardComponent {
  @Input() additionalStyles?: string;

}
