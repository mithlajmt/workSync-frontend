import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './shared/components/Home/homepage/home.component';
import { NavbarComponent } from './shared/components/Home/navbar/navbar.component';
import { LandingpageComponent } from './shared/components/Home/landingpage/landingpage.component';
import { FeaturespageComponent } from './shared/components/Home/featurespage/featurespage.component';
import { ThirdpageComponent } from './shared/components/Home/thirdpage/thirdpage.component';
import { FooterComponent } from './shared/components/Home/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './shared/components/login/login.component';
import { AdminModule } from './admin/admin.module';
import { OrganisationAdminModule } from './organisation-admin/organisation-admin.module';
import { SignupComponent } from './shared/components/signup/signup.component';
import { VerificationOtpComponent } from './shared/components/verification-otp/verification-otp.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingpageComponent,
    FeaturespageComponent,
    ThirdpageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    VerificationOtpComponent,
    ToolbarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    OrganisationAdminModule,


  ],
  providers: [ApiService,OrganisationAdminModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
