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
import { SignupComponent } from './shared/components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingpageComponent,
    FeaturespageComponent,
    ThirdpageComponent,
    FooterComponent,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
