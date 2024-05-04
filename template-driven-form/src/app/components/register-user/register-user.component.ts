import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  @ViewChild('register') registerForm: NgForm;

  @ViewChild('firstName') fName: NgModel;
  @ViewChild('lastName') lName: NgModel;
  @ViewChild('dob') uDob: NgModel;

  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'other', display: 'Other' }
  ]

  categories = [
    { id: 'check-fashion', value: 'fashion', display: 'Fashion' },
    { id: 'check-electro', value: 'electronics', display: 'Electronics' },
    { id: 'check-home-appliance', value: 'home-appliance', display: 'Home Appliance' }
  ]

  countries = [
    { value: 'bd', display: 'Bangladesh' },
    { value: 'ind', display: 'India' },
    { value: 'pk', display: 'Pakistan' }
  ]

  submitForm() {
    console.log(this.registerForm);
    console.log(this.registerForm.value)

    this.registerForm.reset();
  }

  getUsername() {
    let firstName = this.fName.value;
    let lastName = this.lName.value;
    let uDob = new Date(this.uDob.value);

    let userName = '';
    if (firstName.length >= 3) {
      userName = firstName.slice(0, 3);
    }
    else {
      userName = firstName;
    }
    if (lastName.length >= 3) {
      userName += lastName.slice(0, 3);
    }
    else {
      userName += lastName;
    }
    userName += uDob.getFullYear();

    this.registerForm.value.username = userName.toLowerCase();

    // this.registerForm.setValue(
    //   {
    //     "firstname": this.registerForm.value.firstname,
    //     "lastname": this.registerForm.value.lastname,
    //     "email": this.registerForm.value.email,
    //     "phonenumber": this.registerForm.value.phonenumber,
    //     "dateofbirth": this.registerForm.value.dateofbirth,
    //     "username": userName.toLowerCase(),
    //     "address": {
    //       "address1": this.registerForm.value.address.address1,
    //       "address2": this.registerForm.value.address.address2,
    //       "country": "",
    //       "city": ""
    //     },
    //     "gender": "",
    //     "favcat1": "",
    //     "favcat2": "",
    //     "favcat3": ""
    //   }
    // );

    this.registerForm.form.patchValue(
      {
        "username": userName.toLowerCase(),
      }
    );
  }

}


