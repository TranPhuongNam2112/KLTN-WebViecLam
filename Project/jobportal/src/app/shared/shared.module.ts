import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchJobComponent } from './components/search-job/search-job.component';

import { HeaderForEmployerComponent } from './components/header-for-employer/header-for-employer.component';
import { HeaderForCandidateComponent } from './components/header-for-candidate/header-for-candidate.component';
import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, CollapseModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    SearchJobComponent,
   
    HeaderForEmployerComponent,
    HeaderForCandidateComponent,
    FooterComponent,
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
    CollapseModule
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
   
    HeaderForEmployerComponent,
    HeaderForCandidateComponent,
    FooterComponent,
  ]
})
export class SharedModule {
  static forRoot(){
    return {
      ngModule: SharedModule,
      providers: [
        SearchJobComponent,
        HeaderForEmployerComponent,
        HeaderForCandidateComponent,
        FooterComponent,
      ]
    }
  }
 }
