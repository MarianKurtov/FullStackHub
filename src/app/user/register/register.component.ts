import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  frsNameInp = 'First name...';
  lstNameInp = 'Last name...';
  emailInput = 'Email Address...';

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  submitForm() {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
    }else {
      console.log('Form is invalid.')
    }
  }
}
