import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  get contactEmail() {
    return this.signupForm.get('contactEmail');
  }

  get contactNumber() {
    return this.signupForm.get('contactNumber');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  get terms() {
    return this.signupForm.get('terms');
  }

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      companyName: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,}')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Add your form submission logic here
    console.log(this.signupForm.value);
  }
}
