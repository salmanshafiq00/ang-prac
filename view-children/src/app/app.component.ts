import { ViewChild } from '@angular/core';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'view-children';
  fullName = '';

  // @ViewChild('inputEl') inputElements: ElementRef;
  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  onSubmit(){
    this.inputElements.forEach((el) => {
      this.fullName += ' ' + el.nativeElement.value;
      console.log(el.nativeElement)
    });
  }
}
