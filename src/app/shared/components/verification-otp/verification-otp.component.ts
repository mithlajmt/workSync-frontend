import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../shared/services/common.service';
@Component({
  selector: 'app-verification-otp',
  templateUrl: './verification-otp.component.html',
  styleUrls: ['./verification-otp.component.css']
})
export class VerificationOtpComponent {

  constructor(private common:CommonService){}

  verificationForm = new FormGroup({ 
    otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  });



  submitOTP() {
    // Access the form value using this.verificationForm.value
    const otpValue = this.verificationForm.value.otp;
    console.log(otpValue);
    this.common.verifyOtp(otpValue).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse && err.headers.get('content-type') !== 'application/json') {
          console.error('Non-JSON response:', err.error);
          // Handle non-JSON response appropriately
        } else {
          console.error('JSON response error:', err);
          // Handle JSON response error
        }
      }
    });
    
  }

}
