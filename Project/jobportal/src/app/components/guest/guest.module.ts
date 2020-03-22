import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { GuestComponent } from './guest.component';
import { GuestRoutingModule } from './guest-routing.module';

import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { CLoginComponent } from '../candidate/c-login/c-login.component';
import { CRegisterComponent } from '../candidate/c-register/c-register.component';
import {HeaderForGuestComponent } from '../../shared/components/header-for-guest/header-for-guest.component';
import {ForgotPassComponent } from './forgot-pass/forgot-pass.component';



@NgModule({
  declarations: [
    GuestDashboardComponent,
    CLoginComponent,
    CRegisterComponent,
    GuestComponent,
    HeaderForGuestComponent,
    ForgotPassComponent,
    
  ],
  imports: [
    // CommonModule,
    SharedModule.forRoot(),
    GuestRoutingModule,
  ]
})
export class GuestModule { }
