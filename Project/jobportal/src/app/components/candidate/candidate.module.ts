import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ToastComponent } from '../../components/toast/toast.component';
import { SavejobComponent } from './manage-job/savejob/savejob.component';
import { FitjobComponent } from './manage-job/fitjob/fitjob.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { CandidateComponent } from './candidate.component';
import { CSidebarComponent } from './c-sidebar/c-sidebar.component';
import { HeaderForCandidateComponent } from '../../shared/components/header-for-candidate/header-for-candidate.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidateFileComponent } from './candidate-file/candidate-file.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { NgSelect2Module } from 'ng-select2';
import { AlljoblistComponent } from './alljoblist/alljoblist.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { RecommendJobComponent } from './recommend-job/recommend-job.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { OtherswebJoblistComponent } from './othersweb-joblist/othersweb-joblist.component';
import { AllEmployersComponent } from './all-employers/all-employers.component';
import { CompanyJobpostComponent } from './company-jobpost/company-jobpost.component';
import { CandidateHistoryComponent } from './candidate-history/candidate-history.component';
import { IndustryJoblistComponent } from './industry-joblist/industry-joblist.component';
import { HotCrawledJobComponent } from './hot-crawled-job/hot-crawled-job.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchJobpostResultComponent } from './search-jobpost-result/search-jobpost-result.component';
import { ShareSearchJobComponent } from './share-search-job/share-search-job.component';
import { TopviewJobpostComponent } from './topview-jobpost/topview-jobpost.component';
import { ManageAppliedJobsComponent } from './manage-applied-jobs/manage-applied-jobs.component';
@NgModule({
  declarations: [
    ManageProfileComponent,
    CandidateComponent,
    CSidebarComponent,
    SavejobComponent,
    FitjobComponent,
    HeaderForCandidateComponent,
    CandidateDashboardComponent,
    CandidateFileComponent,
    AlljoblistComponent,
    JobDetailComponent,
    RecommendJobComponent,
    OtherswebJoblistComponent,
    AllEmployersComponent,
    CompanyJobpostComponent,
    CandidateHistoryComponent,
    IndustryJoblistComponent,
    HotCrawledJobComponent,
    SearchJobpostResultComponent,
    ShareSearchJobComponent,
    TopviewJobpostComponent,
    ManageAppliedJobsComponent,
    // ToastComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    CandidateRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    UiSwitchModule,
    NgSelect2Module,
    PdfViewerModule,
    NgSelectModule,
  ]
})
export class CandidateModule { }
