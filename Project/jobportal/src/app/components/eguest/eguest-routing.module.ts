import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EguestComponent } from './eguest.component';

import {EguestDashboardComponent } from './eguest-dashboard/eguest-dashboard.component';
import { ELoginComponent} from '../employer/e-login/e-login.component';
import { ERegisterComponent} from '../employer/e-register/e-register.component';
const routes: Routes = [
  {
    path: '',
    component: EguestComponent,
    children: [
      {
        path: '',
        component: EguestDashboardComponent
      },
      {
        path: 'login',
        component: ELoginComponent
      },
      {
        path: 'register',
        component: ERegisterComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EguestRoutingModule { }
