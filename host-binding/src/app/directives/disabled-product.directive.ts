import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[disabledProduct]'
})
export class DisabledProductDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  @Input() set disabledProduct(isDisabled: boolean){
    if(isDisabled){
      this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'gray');
      this.render.addClass(this.element.nativeElement, 'disabled-element');
    }
  }

}
