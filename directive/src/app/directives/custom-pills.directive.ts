import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[CustomPills]'
})
export class CustomPillsDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'teal';
    this.element.nativeElement.style.color = 'white';
  }

}
