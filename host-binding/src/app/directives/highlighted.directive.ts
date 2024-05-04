import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective implements OnInit {

  // @Input('highlighted') highlightedColor: string = 'orange';
  // @Input() textColor: string = 'white';

  @Input('highlighted') bgAndColor: {bgColor: string, color: string} = {bgColor: 'orange', color: 'white'};

  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    // this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.highlightedColor);
    // this.render.setStyle(this.element.nativeElement, 'color', this.textColor);

    this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.bgAndColor.bgColor);
    this.render.setStyle(this.element.nativeElement, 'color', this.bgAndColor.color);
  }

}

Input Setter: This is an input property setter named disabledProduct. It is annotated with @Input() decorator, indicating that it can be bound to a property in the parent component's template.

	• The setter function is executed whenever the disabledProduct input property changes in the parent component.
	
If isDisabled is true, the setter applies styling to disable the product element by changing its background color to gray and adding a CSS class named 'disabled-element'.

