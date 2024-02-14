import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { Employee } from '../interfaces/employee';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})





export class ApiService {
  apiUrl='http://localhost:4000'
  
  private userapi = 'http://localhost:4000';

  constructor( private http:HttpClient) { }
  



  userSignupPost(data:any){
    return this.http.post(`${this.userapi}/signup`,data,httpOptions)
  }

  verifyOtp(otp:any){
    console.log('request generaated');
    
    return this.http.post<any>(`${this.userapi}/verify-otp`,{otp},httpOptions)
  }


  login(data:Login){
    return this.http.post<any>(`${this.apiUrl}/login`,data,httpOptions)
  }

  addEmployee(data:Employee){
    return this.http.post<any>(`${this.apiUrl}/employee`,data,httpOptions)
  }

  }

