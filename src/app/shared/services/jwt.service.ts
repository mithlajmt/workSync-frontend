import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor() { }

  storeToken(token:string){
    localStorage.setItem('token',token)
  }
  
}
