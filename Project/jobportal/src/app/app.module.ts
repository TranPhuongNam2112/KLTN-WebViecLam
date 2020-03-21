import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CLoginComponent } from './components/candidate/c-login/c-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule,CollapseModule } from 'angular-bootstrap-md';
import { CRegisterComponent } from './components/candidate/c-register/c-register.component';
import { ERegisterComponent } from './components/employer/e-register/e-register.component';
import { ELoginComponent } from './components/employer/e-login/e-login.component';
import { HeaderForGuestComponent } from './shared/components/header-for-guest/header-for-guest.component';
import { HeaderForEmployerComponent } from './shared/components/header-for-employer/header-for-employer.component';
import { HeaderForCandidateComponent } from './shared/components/header-for-candidate/header-for-candidate.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GuestDashboardComponent } from './shared/components/guest-dashboard/guest-dashboard.component';
import { SearchJobComponent } from './shared/components/search-job/search-job.component';


@NgModule({
  declarations: [
    AppComponent,
    CLoginComponent,
    CRegisterComponent,
    ERegisterComponent,
    ELoginComponent,
    HeaderForGuestComponent,
    HeaderForEmployerComponent,
    HeaderForCandidateComponent,
    FooterComponent,
    GuestDashboardComponent,
    SearchJobComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    CollapseModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
