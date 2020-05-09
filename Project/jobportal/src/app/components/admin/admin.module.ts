import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderForAdminComponent } from './header-for-admin/header-for-admin.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountService } from './manage-account/service/account.service';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { CandidateDetailComponent } from './manage-candidate/candidate-detail/candidate-detail.component';
import { ManageEmployerComponent } from './manage-employer/manage-employer.component';
import { EmployerDetailComponent } from './manage-employer/employer-detail/employer-detail.component';
import { ManageJobPostComponent } from './manage-job-post/manage-job-post.component';
import { JobpostDetailComponent } from './manage-job-post/jobpost-detail/jobpost-detail.component';
//import { ToastComponent } from '../../components/toast/toast.component';
import { ManageJoblocationComponent } from './manage-joblocation/manage-joblocation.component';
import { ManageJobtypeComponent } from './manage-jobtype/manage-jobtype.component';
import { CreateJobtypeComponent } from './create-jobtype/create-jobtype.component';
import { UpdateJobtypeComponent } from './update-jobtype/update-jobtype.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
@NgModule({
  declarations: [
    AdminComponent,
    HeaderForAdminComponent,
    ManageAccountComponent,
    ManageCandidateComponent,
    CandidateDetailComponent,
    ManageEmployerComponent,
    EmployerDetailComponent,
    ManageJobPostComponent,
    JobpostDetailComponent,
    //ToastComponent,
    ManageJoblocationComponent,
    ManageJobtypeComponent,
    CreateJobtypeComponent,
    UpdateJobtypeComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    AdminRoutingModule,
    //NgbModule
  ],
  providers: [AccountService],
})
export class AdminModule { }
