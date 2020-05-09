import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployerComponent } from './employer.component';
import {EmployerDashboardComponent} from './employer-dashboard/employer-dashboard.component';
import { EAccountComponent} from './e-account/e-account.component';
import {PostjobComponent} from './postjob/postjob.component';
import {SaveprofileComponent} from './saveprofile/saveprofile.component';
import { ManagejobComponent} from './managejob/managejob.component';
import {JobpostDetailComponent} from './jobpost-detail/jobpost-detail.component';
const routes: Routes = [
  {
  path: '',
    component: EmployerComponent,
    children: [
      {
        path: '',
        component: EmployerDashboardComponent
      },
      {
        path: 'account',
        component: EAccountComponent
      },
      {
        path: 'postjob',
        component: PostjobComponent
      },
      {
        path: 'managejob',
        component: ManagejobComponent
      },
      {
        path: 'jobpost-detail',
        component: JobpostDetailComponent
      },

      {
        path: 'savedprofile',
        component: SaveprofileComponent
      },
     
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
