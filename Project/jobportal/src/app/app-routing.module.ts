import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GuestModule} from './components/guest/guest.module';
import { EguestModule} from './components/eguest/eguest.module';
import { CandidateModule} from './components/candidate/candidate.module';
import {EmployerModule} from './components/employer/employer.module';
const routes: Routes = [
  { path: '', redirectTo: 'eguest', pathMatch: 'full' },
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
