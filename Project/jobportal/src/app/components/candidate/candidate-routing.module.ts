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
import {HotCrawledJobComponent} from 'src/app/components/candidate/hot-crawled-job/hot-crawled-job.component';
import {SearchJobpostResultComponent} from 'src/app/components/candidate/search-jobpost-result/search-jobpost-result.component';
import {TopviewJobpostComponent} from 'src/app/components/candidate/topview-jobpost/topview-jobpost.component';
import {ManageAppliedJobsComponent} from 'src/app/components/candidate/manage-applied-jobs/manage-applied-jobs.component';
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
        path: 'appliedjobposts',
        component: ManageAppliedJobsComponent
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
        path: 'hotcrawledjob',
        component: HotCrawledJobComponent
      },
      {
        path: 'topviewedjob',
        component: TopviewJobpostComponent
      },
      {
        path: 'history',
        component: CandidateHistoryComponent
      },
      {
        path: 'industry-jobpost',
        component: IndustryJoblistComponent
      },
      {
        path: 'search-jobpost-result',
        component: SearchJobpostResultComponent
      },
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
