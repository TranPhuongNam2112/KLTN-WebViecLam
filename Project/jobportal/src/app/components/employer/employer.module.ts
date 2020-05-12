import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

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
  
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    EmployerRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class EmployerModule { }
