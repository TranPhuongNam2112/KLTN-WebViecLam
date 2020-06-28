
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
 import {HeaderForEmployerComponent} from '../../shared/components/header-for-employer/header-for-employer.component';
import { EAccountComponent } from './e-account/e-account.component';
import { PostjobComponent } from './postjob/postjob.component';
import { SaveprofileComponent } from './saveprofile/saveprofile.component';
import { ManagejobComponent } from './managejob/managejob.component';
import { JobpostDetailComponent } from './jobpost-detail/jobpost-detail.component';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';
import { RecommendCandidateComponent } from './recommend-candidate/recommend-candidate.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EmployerHistoryComponent } from './employer-history/employer-history.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    EmployerComponent,
    EmployerDashboardComponent,
    HeaderForEmployerComponent,
    EAccountComponent,
    PostjobComponent,
    SaveprofileComponent,
    ManagejobComponent,
    JobpostDetailComponent,
    SearchCandidateComponent,
    RecommendCandidateComponent,
    CandidateDetailComponent,
    EmployerHistoryComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    EmployerRoutingModule,
    NgbModule,
    FormsModule,
    PdfViewerModule,
    NgSelect2Module,
    NgSelectModule,
  ]
})
export class EmployerModule { }
