import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GuestModule} from './components/guest/guest.module';
import { EguestModule} from './components/eguest/eguest.module';
import { CandidateModule} from './components/candidate/candidate.module';
import {EmployerModule} from './components/employer/employer.module';
import {AdminModule} from './components/admin/admin.module';
import {NotfoundComponent} from './shared/components/notfound/notfound.component';
import {ResetPasswordComponent} from './shared/components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },

  { //lazy loading
    path: 'guest',
    loadChildren: './components/guest/guest.module#GuestModule'
},
{ //lazy loading
  path: 'eguest',
  loadChildren: './components/eguest/eguest.module#EguestModule'
},
{ //lazy loading
  path: 'candidate',
  loadChildren: './components/candidate/candidate.module#CandidateModule'
},
{ //lazy loading
  path: 'employer',
  loadChildren: './components/employer/employer.module#EmployerModule'
},
{ //lazy loading
  path: 'admin',
  loadChildren: './components/admin/admin.module#AdminModule'
},




];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  }),
    // GuestRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
