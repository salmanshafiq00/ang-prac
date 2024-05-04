import { Component, Input } from '@angular/core';
import { Observable, Subject, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // // Create a Subject
  // subject = new Subject<Number>();

  // // observableSubscription: Subscription;

  // observable = new Observable<Number>((observer) => {
  //   observer.next(Math.random()); // We emit value during declare observable
  // });

  // // Subscribe to the subject
  // subjectSubscription = this.subject.subscribe({
  //   next: (value) => { console.log('From Subject Subscriber 1: ' + value) },
  //   error: (error) => { console.log(error.message) },
  //   complete: () => console.log('Completed Subject 1')
  // });

  // subjectSubscription2 = this.subject.subscribe({
  //   next: (value) => { console.log('From Subject Subscriber 2: ' + value) },
  //   error: (error) => { console.log(error.message) },
  //   complete: () => console.log('Completed Subject 2')
  // });

  // // Subscribe to the observable
  // observableSubscription = this.observable.subscribe({
  //   next: (value) => console.log('From Observable Subscriber 1: ' + value),
  //   error: (error) => console.log(error.message),
  //   complete: () => console.log('completed observable 1')
  // });

  // observableSubscription2 = this.observable.subscribe({
  //   next: (value) => console.log('From Observable Subscriber 1: ' + value),
  //   error: (error) => console.log(error.message),
  //   complete: () => console.log('completed observable 2')
  // });

  // ngOnInit() {
  //   // Emit values to the Subject when we need
  //   this.subject.next(Math.random());

  // }

}
