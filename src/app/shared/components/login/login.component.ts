// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginData!:Login;
  

  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    private router:Router,
    private api:ApiService
    ) { }
 
  ngOnInit(): void {    
    this.loginForm = this.fb.group({
      userID:['',Validators.required],
      password:['',Validators.minLength(8)],
      rememberMe:[false]
    })
  }


  onSubmit(): void {
    this.loginData=this.loginForm.value
    console.log(this.loginData)
    this.api.login(this.loginData).subscribe({
      
      next:(res)=>{
        console.log(res);
        
        
        if(res.success){
          console.log('chathisghatt');
          this.router.navigate(['/home'])
        }
      },
      error:(err)=>{
        console.log(err);
        
      }
    })



  }
}
