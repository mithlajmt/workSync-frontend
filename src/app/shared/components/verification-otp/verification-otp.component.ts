import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ApiService } from '../../services/api.service';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verification-otp',
  templateUrl: './verification-otp.component.html',
  styleUrls: ['./verification-otp.component.css']
})
export class VerificationOtpComponent implements OnInit {
  
  @Input()companyData:any
  validationResult!:String;
  errorMessage!:String;
  token!:string;

  ngOnInit(): void {
    console.log(this.companyData.value);
  }


  companyRegistrationForm:any;

  constructor(private apiService:ApiService ,private jwtService:JwtService , private router:Router){}

  verificationForm = new FormGroup({ 
    otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  });





  submitOTP() {
    const { otp } = this.verificationForm.value;
  
    // Shallow copy to avoid circular references
    const companyDataCopy = { ...this.companyData.value };
  
    // Combine OTP with the copied data
    const combinedData = { ...companyDataCopy, otp:otp };
  
    this.apiService.verifyOtp(combinedData).subscribe({
      next: (res) => {
        console.log(res);
        if (res.success) {
          // Display success message in your component
          console.log('OTP verified successfully');
          console.log(res.token)
         this.validationResult=res.message
         this.token=res.token
        this.jwtService.storeToken(this.token)
        this.router.navigate(['/home'])

         
        } else {
          // Display failure message in your component
          console.log('OTP verification failed, please retry again');
         this.validationResult=res.message

        }
      },
      error: (err: any) => {
        this.errorMessage = err.error?.data?.message || 'An error occurred.';
        console.error(err);
      },
    });
  }
  

}
