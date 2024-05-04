import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from '../../guards/guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeactivateComponent {

  @ViewChild('contact') form: NgForm;

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.form.reset();
  }

  canDeactivate(): boolean{
    if(this.form.dirty){
      return confirm('Are you sure you want to leave? Any unsaved changes will be lost.');
    }
    return true;
  }
}
