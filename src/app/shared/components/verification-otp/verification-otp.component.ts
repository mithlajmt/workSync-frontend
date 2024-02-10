import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-verification-otp',
  templateUrl: './verification-otp.component.html',
  styleUrls: ['./verification-otp.component.css']
})
export class VerificationOtpComponent implements OnInit {
  
  @Input()companyData:any
  validationResult!:String;
  errorMessage!:String;

  ngOnInit(): void {
    console.log(this.companyData.value);
  }


  companyRegistrationForm:any;

  constructor(private apiService:ApiService){}

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
         this.validationResult=res.message
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
