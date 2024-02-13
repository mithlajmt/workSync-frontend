import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')  //NOT NOT operator here return true if theres tokenvalue
  }
  
}
