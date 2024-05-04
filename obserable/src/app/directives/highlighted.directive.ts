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







