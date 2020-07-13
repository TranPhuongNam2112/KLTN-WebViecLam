import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GuestDashboardComponent} from './guest-dashboard/guest-dashboard.component';
import {CLoginComponent } from '../candidate/c-login/c-login.component';
import {CRegisterComponent} from '../candidate/c-register/c-register.component';
import {GuestComponent } from './guest.component';
import { ForgotPassComponent} from './forgot-pass/forgot-pass.component';
import {ValidateAccComponent } from './validate-acc/validate-acc.component';
import {AllJoblistComponent} from './all-joblist/all-joblist.component';
import {IndustryJoblistComponent} from 'src/app/components/candidate/industry-joblist/industry-joblist.component';
 const routes: Routes = [ 
   {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        component: GuestDashboardComponent
      },
      {
        path: 'login',
        component: CLoginComponent
      },
      {
        path: 'register',
        component: CRegisterComponent
      },
      {
        path: 'forgot-pass',
        component: ForgotPassComponent
      },
      {
        path: 'validate',
        component: ValidateAccComponent
      },
      {
        path: 'alljoblists',
        component: AllJoblistComponent
      },
      {
        path: 'industry-jobpost',
        component: IndustryJoblistComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
