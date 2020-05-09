import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {ManageAccountComponent} from './manage-account/manage-account.component';
import {ManageCandidateComponent} from './manage-candidate/manage-candidate.component';
import {CandidateDetailComponent} from './manage-candidate/candidate-detail/candidate-detail.component';
import {ManageEmployerComponent} from './manage-employer/manage-employer.component';
import {EmployerDetailComponent} from './manage-employer/employer-detail/employer-detail.component';
import {ManageJobPostComponent} from './manage-job-post/manage-job-post.component';
import {JobpostDetailComponent} from './manage-job-post/jobpost-detail/jobpost-detail.component';
import {ManageJoblocationComponent} from './manage-joblocation/manage-joblocation.component';
import {ManageJobtypeComponent} from './manage-jobtype/manage-jobtype.component';
import {CreateJobtypeComponent} from './create-jobtype/create-jobtype.component';
import {UpdateJobtypeComponent} from './update-jobtype/update-jobtype.component';
import {ManageUserComponent} from './manage-user/manage-user.component';
const routes: Routes = [
  {path: '',
  component: AdminComponent,
  children: [
    {
      path: '',
      redirectTo: 'user', pathMatch: 'full' 
    },
    {
      path: 'user',
      component: ManageUserComponent
    },
    {
      path: 'account',
      component: ManageAccountComponent
    },
    {
      path: 'candidate',
      component: ManageCandidateComponent
    },
    {
      path: 'employer',
      component: ManageEmployerComponent
    },
    {
      path: 'candidate-detail/:id',
      component: CandidateDetailComponent
    },
    {
      path: 'employer-detail/:id',
      component: EmployerDetailComponent
    },
    {
      path: 'jobpost',
      component: ManageJobPostComponent
    },
    {
      path: 'jobpost-detail/:id',
      component: JobpostDetailComponent
    },
    {
      path: 'joblocation',
      component: ManageJoblocationComponent
    },
    {
      path: 'jobtype',
      component: ManageJobtypeComponent
    },
    {
      path: 'createjobtype',
      component: CreateJobtypeComponent
    },
    {
      path: 'updatejobtype/:id',
      component: UpdateJobtypeComponent
    },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
