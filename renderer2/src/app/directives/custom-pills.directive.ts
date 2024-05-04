import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[CustomPills]'
})
export class CustomPillsDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'teal';
    // this.element.nativeElement.style.color = 'white';
    console.log('test');
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'teal');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }

}






