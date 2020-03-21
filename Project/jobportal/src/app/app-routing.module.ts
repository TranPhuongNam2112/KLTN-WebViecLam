import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CLoginComponent} from './components/candidate/c-login/c-login.component';
import { CRegisterComponent } from './components/candidate/c-register/c-register.component';
import {ELoginComponent} from './components/employer/e-login/e-login.component';
import {ERegisterComponent} from './components/employer/e-register/e-register.component';
import {GuestDashboardComponent} from './shared/components/guest-dashboard/guest-dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: 'clogin', pathMatch: 'full' },
 { path: 'clogin', component: CLoginComponent },
 { path: 'cregister', component: CRegisterComponent },
 { path: 'elogin', component: ELoginComponent },
 { path: 'eregister', component: ERegisterComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
