import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/Home/homepage/home.component';
import { SignupComponent } from './shared/components/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
