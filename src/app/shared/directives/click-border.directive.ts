import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClickBorder]'
})
export class ClickBorderDirective {
  @Input() borderColor: 'black';

  constructor(
    private element: ElementRef, private renderer: Renderer2
  ){ }

  @HostListener('mousedown') onMouseDown() {
    this.renderer.setStyle(this.element.nativeElement, 'border', '3px solid ' + this.borderColor);
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.removeStyle(this.element.nativeElement, 'border');
  }
}
