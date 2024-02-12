import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  

  private userapi = 'http://localhost:4000';

  constructor( private http:HttpClient) { }
  



  userSignupPost(data:any){
    return this.http.post(`${this.userapi}/register/get-otp`,data,httpOptions)
  }

  verifyOtp(otp:any){
    console.log('request generaated');
    
    return this.http.post<any>(`${this.userapi}/register/verify-otp`,{otp},httpOptions)
  }
}
