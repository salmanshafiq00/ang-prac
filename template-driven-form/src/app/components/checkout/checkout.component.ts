import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  firstName: string;
  lastName: string;
  email: string;
  address: string;

  constructor(){
    console.log('checkout')
  }

  submitForm() {
    // Implement logic to submit the form (e.g., send data to server)
    console.log('Form submitted');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Address:', this.address);
  }
}
