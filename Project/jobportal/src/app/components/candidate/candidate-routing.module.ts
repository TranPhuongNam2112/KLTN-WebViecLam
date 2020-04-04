import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent} from './candidate.component';
// import { ManageProfileComponent} from './manage-profile/manage-profile.component';
// import {SavejobComponent} from './manage-job/savejob/savejob.component';
// import {FitjobComponent } from './manage-job/fitjob/fitjob.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import {CSidebarComponent} from './c-sidebar/c-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
    children: [
     
      {
        path: '',
        component: CandidateDashboardComponent
      },
    
      {
        path: 'manage',
        component: CSidebarComponent
      },
       // {
      //   path: 'manageprofile',
      //   component: ManageProfileComponent
      // },
      // {
      //    //lazy loading
      //     path: 'managejob',
      //     loadChildren: './manage-job/manage-job.module#ManageJobModule'
        
      // },
      // {
      //   path: '',
      //   component: CSidebarComponent
      // },
      // {
      //   path: 'savejob',
      //   component: SavejobComponent
      // },
      // {
      //   path: 'fitjob',
      //   component: FitjobComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
