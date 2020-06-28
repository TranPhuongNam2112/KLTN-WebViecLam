import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent} from './candidate.component';
// import { ManageProfileComponent} from './manage-profile/manage-profile.component';
// import {SavejobComponent} from './manage-job/savejob/savejob.component';
// import {FitjobComponent } from './manage-job/fitjob/fitjob.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import {CSidebarComponent} from './c-sidebar/c-sidebar.component';
import {AlljoblistComponent} from './alljoblist/alljoblist.component';
import {AllEmployersComponent} from './all-employers/all-employers.component';
import {OtherswebJoblistComponent} from './othersweb-joblist/othersweb-joblist.component';
import {JobDetailComponent } from './job-detail/job-detail.component';
import {RecommendJobComponent} from './recommend-job/recommend-job.component';
import {CompanyJobpostComponent} from 'src/app/components/candidate/company-jobpost/company-jobpost.component';
import {CandidateHistoryComponent} from 'src/app/components/candidate/candidate-history/candidate-history.component';
import {IndustryJoblistComponent} from 'src/app/components/candidate/industry-joblist/industry-joblist.component';
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
      {
        path: 'alljoblists',
        component: AlljoblistComponent
      },
      {
        path: 'all-employers',
        component: AllEmployersComponent
      },
      {
        path: 'other-websites-job-lists',
        component: OtherswebJoblistComponent
      },
      {
        path: 'jobpost-detail/:id',
        component: JobDetailComponent
      },
      {
        path: 'companies/:id',
        component: CompanyJobpostComponent
      },
      {
        path: 'recommendjob',
        component: RecommendJobComponent
      },
      {
        path: 'history',
        component: CandidateHistoryComponent
      },
      {
        path: 'industry-jobpost/:industry',
        component: IndustryJoblistComponent
      },
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
