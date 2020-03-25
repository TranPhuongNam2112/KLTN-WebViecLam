import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EguestRoutingModule } from './eguest-routing.module';
import { EguestComponent } from './eguest.component';

import { SharedModule } from '../../shared/shared.module';
import { HeaderForEguestComponent } from '../../shared/components/header-for-eguest/header-for-eguest.component';
import { EguestDashboardComponent } from './eguest-dashboard/eguest-dashboard.component';
import { ELoginComponent} from '../employer/e-login/e-login.component';
import { ERegisterComponent} from '../employer/e-register/e-register.component';
import { EforgotPassComponent } from './eforgot-pass/eforgot-pass.component';
@NgModule({
  declarations: [
    EguestComponent,
    HeaderForEguestComponent,
    EguestDashboardComponent,
    ELoginComponent,
    ERegisterComponent,
    EforgotPassComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    EguestRoutingModule
  ]
})
export class EguestModule { }
