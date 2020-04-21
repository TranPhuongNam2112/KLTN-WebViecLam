import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule,InputUtilitiesModule, WavesModule, ButtonsModule, CollapseModule } from 'angular-bootstrap-md';




import { SearchJobComponent } from './components/search-job/search-job.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPassComponent} from './components/forgot-pass/forgot-pass.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { ValidateAccComponent } from './components/validate-acc/validate-acc.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
//import {HeaderForEmployerComponent} from './components/header-for-employer/header-for-employer.component';
@NgModule({
  declarations: [
    SearchJobComponent,
    FooterComponent,
    ForgotPassComponent,
    ChangePassComponent,
    ValidateAccComponent,
  //  HeaderForEmployerComponent,
    LoginComponent,
  NotfoundComponent,
  
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    CollapseModule,
   
  ],
  exports: [
    SearchJobComponent,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    InputUtilitiesModule,
    WavesModule,
    ButtonsModule,
    CollapseModule,
    ChangePassComponent,
   // HeaderForEmployerComponent,
    ValidateAccComponent,
    FooterComponent,
    ForgotPassComponent,
    LoginComponent,
    NotfoundComponent
  ]
})
export class SharedModule {
  static forRoot(){
    return {
      ngModule: SharedModule,
      providers: [
        SearchJobComponent,
       // HeaderForEmployerComponent,
        ValidateAccComponent,
        FooterComponent,
        ForgotPassComponent,
        ChangePassComponent,
        LoginComponent,
        NotfoundComponent
      ]
    }
  }
 }
