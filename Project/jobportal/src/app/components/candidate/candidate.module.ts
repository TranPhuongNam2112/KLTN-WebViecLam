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
    // ToastComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    CandidateRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CandidateModule { }
