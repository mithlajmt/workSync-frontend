import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  showOtpComp:Boolean=false;
  errorMessage:any

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
  ) {
    this.signupForm = this.fb.group({
      companyName: ['', [Validators.required]], 
      industry: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9]{10}')],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
      
    });
  }

  signupFormData:any;

  ngOnInit(): void {}

  onSubmit() {
    this.signupFormData = this.signupForm.value
    // Add your form submission logic here
    console.log(this.signupForm);
    this.apiService.userSignupPost(this.signupFormData)
    .subscribe({
      next:(res:any)=>{
        this.showOtpComp=true
        this.errorMessage=''
        console.log(res);
        
      },
      error: (err: any) => {
        this.showOtpComp = false; 
        this.errorMessage = err.error?.data?.message || 'An error occurred.';
        console.error(err);
      },
    });


    this.showOtpComp=true
}
}
    

