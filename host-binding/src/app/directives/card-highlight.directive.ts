import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardHighlight]'
})
export class CardHighlightDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseHover() {
    this.render.addClass(this.element.nativeElement, 'card-highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.removeClass(this.element.nativeElement, 'card-highlight');
  }

}
