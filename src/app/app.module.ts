import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './shared/components/Home/homepage/home.component';
import { NavbarComponent } from './shared/components/Home/navbar/navbar.component';
import { LandingpageComponent } from './shared/components/Home/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
