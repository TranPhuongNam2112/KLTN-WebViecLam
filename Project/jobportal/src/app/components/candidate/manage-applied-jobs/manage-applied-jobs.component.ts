import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ManageAppliedJobsService} from 'src/app/_services/employer/manage-applied-jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
@Component({
  selector: 'app-manage-applied-jobs',
  templateUrl: './manage-applied-jobs.component.html',
  styleUrls: ['./manage-applied-jobs.component.scss']
})
export class ManageAppliedJobsComponent implements OnInit {
  appliedJobPosts: Observable<JobPostSummary[]>;
  public pageNo: number = 0;
  public pages: Array<number>;
  constructor( 
    private manageAppliedJobsService: ManageAppliedJobsService, 
    private router: Router,   public toastService: ToastService) { }
    setPage(i, event: any) {
      event.preventDefault();
      this.pageNo = i;
      this.getJobPosts();
    }
  ngOnInit(): void {
    this.getJobPosts();
  }
  getJobPosts() {
    this.manageAppliedJobsService.getAppliedJobPost(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.appliedJobPosts = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  getJobPostDetail(id: number) {
    this.router.navigate(['candiate/jobpost-detail', id]);
  }
  jobPostDetail(id: number) {
    //this.router.navigate(['employer/candidate-detail', id]);
    let url = this.router.createUrlTree(['candidate/jobpost-detail', id]);
    window.open(url.toString(), '_blank');
  }

}
