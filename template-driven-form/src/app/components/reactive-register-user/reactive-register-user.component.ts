import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { MinimumAgeValidator } from '../../validators/minimum-age-validator';
import { UsernameExistValidator } from '../../validators/username-exist-validator';

@Component({
  selector: 'app-reactive-register-user',
  templateUrl: './reactive-register-user.component.html',
  styleUrl: './reactive-register-user.component.css',
})
export class ReactiveRegisterUserComponent implements OnInit {


  registerForm: FormGroup;

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
    this.intializeFormGroup();  
  }

  getUsername() {
    let firstName = this.registerForm.get('firstName').value;
    let lastName = this.registerForm.get('lastName').value;
    let uDob = new Date(this.registerForm.get('dateofbirth').value);

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

    this.registerForm.get('username').setValue(userName);

  }

  get f(){
    return this.registerForm.controls;
  }

  ngOnInit(): void {

    this.intializeFormGroup();   
  }

  intializeFormGroup(){
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required), 
      lastName: new FormControl(null, Validators.required),   
      email: new FormControl(null, Validators.email),          
      phonenumber: new FormControl(null, [Validators.pattern('^(\\+88)?01[3-9]\\d{8}$')]),
      dateofbirth: new FormControl(null, [MinimumAgeValidator.minimumAge(18)]),
      username: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)],
        asyncValidators: [UsernameExistValidator.ValidateUsernameExists()],
        updateOn: 'blur'
      }),
      gender: new FormControl('male'),
      favcat1: new FormControl(null),
      favcat2: new FormControl('electronics'),
      favcat3: new FormControl(null),
      address: new FormGroup({
        address1: new FormControl(null, [Validators.maxLength(200)]),
        address2: new FormControl(null, [Validators.maxLength(200)]),
        country: new FormControl('bd'),
        city: new FormControl(null, Validators.required),
        zipcode: new FormControl(null, [Validators.max(10000)])
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
      contingency: new FormControl(false, [Validators.requiredTrue])
    });   
  }
  
  addSkill(){
    (<FormArray>this.registerForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  removeSkill(index: number){
    (<FormArray>this.registerForm.get('skills')).removeAt(index);
  }

  get skillsLength() {
    return (<FormArray>this.registerForm.get('skills')).length;
  }

}

