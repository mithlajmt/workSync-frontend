import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/Home/homepage/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { ToolbarComponent } from './shared/components/main-hrms/toolbar/toolbar.component';
import { LoginAuthGuard } from './guard/logins.guard';

const routes: Routes = [
  {path:'',
  // canActivate:[LoginAuthGuard],
  component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:ToolbarComponent},
  // {path:'otpVerification', component:VerificationOtpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
