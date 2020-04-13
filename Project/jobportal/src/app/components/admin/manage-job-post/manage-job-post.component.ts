import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JobPostService } from '../../../_services/admin/job-post.service';
import { JobPost } from '../../../_models/jobPost';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';
@Component({
  selector: 'app-manage-job-post',
  templateUrl: './manage-job-post.component.html',
  styleUrls: ['./manage-job-post.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ManageJobPostComponent implements OnInit {
  jobPosts: Observable<JobPost[]>;
  public pageNo: number = 0;
  public pages: Array<number>;

  constructor(private jobPostService: JobPostService, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal,
    public toastService: ToastService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getJobPosts();
  }
  ngOnInit(): void {
    this.getJobPosts();
  }
  getJobPosts() {
    this.jobPostService.getJobPosts(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.jobPosts = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  jobPostDetail(id: number) {
    this.router.navigate(['admin/jobpost-detail', id]);
  }
  open(content) {
    this.modalService.open(content);
  }
  
  deleteJobPost(id: number,dangerTpl,successTpl) {
    this.jobPostService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.getJobPosts();
          // this.toastService.show('Congratulation! You have done successfully!', { classname: 'bg-success text-light', delay: 3000 });
          this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
        },
        error => {
          console.log(error);
          // this.toastService.show('Oh No! You have got some error!', { classname: 'bg-danger text-light', delay: 3000 });
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
        }
      );

  }
 
}
