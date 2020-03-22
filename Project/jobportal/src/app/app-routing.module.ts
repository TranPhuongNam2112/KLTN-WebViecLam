import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GuestModule} from './components/guest/guest.module';
import { EguestModule} from './components/eguest/eguest.module';
const routes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { //lazy loading
    path: 'guest',
    loadChildren: './components/guest/guest.module#GuestModule'
},
{ //lazy loading
  path: 'eguest',
  loadChildren: './components/eguest/eguest.module#EguestModule'
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
