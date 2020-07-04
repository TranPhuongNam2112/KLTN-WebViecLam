import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployerComponent } from './employer.component';
import {EmployerDashboardComponent} from './employer-dashboard/employer-dashboard.component';
import { EAccountComponent} from './e-account/e-account.component';
import {PostjobComponent} from './postjob/postjob.component';
import {SaveprofileComponent} from './saveprofile/saveprofile.component';
import { ManagejobComponent} from './managejob/managejob.component';
import {JobpostDetailComponent} from './jobpost-detail/jobpost-detail.component';
import {SearchCandidateComponent} from './search-candidate/search-candidate.component';
import {RecommendCandidateComponent} from './recommend-candidate/recommend-candidate.component';
import {CandidateDetailComponent} from './candidate-detail/candidate-detail.component';
import {EmployerHistoryComponent} from 'src/app/components/employer/employer-history/employer-history.component';
import {AppliedCandidateComponent} from 'src/app/components/employer/applied-candidate/applied-candidate.component';
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
        path: 'jobpost-detail/:id',
        component: JobpostDetailComponent
      },
      {
        path: 'history',
        component: EmployerHistoryComponent
      },

      {
        path: 'savedprofile',
        component: SaveprofileComponent
      },
      {
        path: 'applied-profile',
        component: AppliedCandidateComponent
      },
      {
        path: 'searchcandidate',
        component: SearchCandidateComponent
      },
      {
        path: 'recommendcandidate',
        component: RecommendCandidateComponent
      },
      {
        path: 'candidate-detail/:id',
        component: CandidateDetailComponent
      },
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
