import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/Home/homepage/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { ToolbarComponent } from './shared/components/main-hrms/toolbar/toolbar.component';
import { LoginAuthGuard } from './guard/logins.guard';
import { MainComponent } from './shared/components/main-hrms/main/main.component';
import { AddEmployeeComponent } from './admin/employees/add-employee/add-employee.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {path:'',
  // canActivate:[LoginAuthGuard],
  component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:MainComponent,
  children:[
    {
      path:'employee',
      component:AddEmployeeComponent
    },
  ]
},
  // {path:'otpVerification', component:VerificationOtpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
