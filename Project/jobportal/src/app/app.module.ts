import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 //import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
//import {HeaderForEmployerComponent} from './shared/components/header-for-employer/header-for-employer.component';
// import {HeaderForCandidateComponent} from './shared/components/header-for-candidate/header-for-candidate.component';
@NgModule({
  declarations: [
    AppComponent, 
    //HeaderForEmployerComponent,
    // HeaderForCandidateComponent
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    // GuestModule,
    AppRoutingModule,
    HttpClientModule

   
  ],
  providers: [ authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
