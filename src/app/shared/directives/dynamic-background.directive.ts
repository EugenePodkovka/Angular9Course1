import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDynamicBackground]'
})
export class DynamicBackgroundDirective {
  constructor() { }

  @HostBinding('style.background-color') backgroundColor: string;
  @HostListener('mouseover') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = '';
  }

}
