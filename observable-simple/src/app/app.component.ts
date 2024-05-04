import { OnDestroy } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { Observable, Subscription, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'new-app';
  constructor(private render: Renderer2, private elementRef: ElementRef) {

  }

  // Create an observable that emits values 1, 2, and 3, then completes after a delay
  observable = new Observable<number>(subscriber => {
    subscriber.next(1);
    setTimeout(() => subscriber.next(2), 1000);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.complete(); // Complete the observable after a delay
    }, 2000);
    setTimeout(() => subscriber.next(4), 3000);
    subscriber.next(5);
  });

  array = [1, 2, 3, 4, 5];
  array2 = ['a', 'b', 'c', 'd', 'e']

  // ofObservable = of(this.array, this.array2, 'salman');

  ofObservable = from(this.array);

  // Converting a promise to an observable
  promise = new Promise(resolve => {
    setTimeout(() => resolve('resolved'), 1000);
  });

  // observableFromPromise = from(this.promise);
  observableFromString = from('Salman');

  ngOnInit() {
    this.observableFromString.subscribe({
      next: (value) => console.log(value), // Next handler to log emitted values
      error: (error) => console.log(error.message), // Error handler to log errors
      complete: () => console.log('Observable Emitting Completed')
    });
    document.querySelector('button')
  }


// Declare a private member variable itemCount initialized to 0.
private itemCount = 0;

// Declare a private member variable buttonClickSubscription of type Subscription.
private buttonClickSubscription: Subscription;

// Angular lifecycle hook method called after the component's view has been fully initialized.
ngAfterViewInit(): void {
  // Retrieve reference to the button element using ElementRef and nativeElement.
  const button = this.elementRef.nativeElement.querySelector('button');

  // Retrieve reference to the <ul> container using ElementRef and nativeElement.
  const ulContainer = this.elementRef.nativeElement.querySelector('#item-container');

  // Create an observable buttonClick$ which emits events when the button is clicked.
  const buttonClick$ = fromEvent(button, 'click');

  // Subscribe to the buttonClick$ observable.
  this.buttonClickSubscription = buttonClick$.subscribe(() => {
    // Increment the itemCount variable.
    ++this.itemCount;

    // Create a new <li> element using Renderer2.
    const li = this.render.createElement('li');

    // Add a class 'item' to the <li> element.
    this.render.addClass(li, 'item');

    // Create text node for the <li> element with current itemCount.
    const liText = this.render.createText(`Item ${this.itemCount}`);

    // Append the text node to the <li> element.
    this.render.appendChild(li, liText);

    // Append the <li> element to the <ul> container.
    this.render.appendChild(ulContainer, li);
  });
}

// Angular lifecycle hook method called when the component is about to be destroyed.
ngOnDestroy(): void {
  // Check if buttonClickSubscription exists.
  if(this.buttonClickSubscription){
    // Unsubscribe from the buttonClickSubscription to prevent memory leaks.
    this.buttonClickSubscription.unsubscribe();
  }
}


}
