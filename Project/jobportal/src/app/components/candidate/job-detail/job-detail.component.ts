import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  id: number;
  jobDetail: JobPostDetails;
  savedJobPost: JobPostSummary;
  save: JobPostSummary;
  all: string;
  public pageNo: number = 0;
  public pages: Array<number>;
  result = '';
  isSaved: boolean;
  constructor(
    private allJoblistService: AllJoblistService,
    private route: ActivatedRoute, private router: Router,
    private jobDetailService: JobDetailService,
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.savedJobPost = new JobPostSummary();
    this.getSaveJobPost();
    this.jobDetail = new JobPostDetails();
    this.getJobDetail();
  }
  getJobDetail() {
    this.id = this.route.snapshot.params['id'];
    this.jobDetailService.getJobPostDetail(this.id)
      .subscribe(data => {
        this.jobDetail = data;
        console.log(data);
      }, error => console.log(error));
  }
  getSaveJobPost() {
    this.allJoblistService.getSaveJobPost(this.pageNo).subscribe(
      data => {
        console.log("test");
        console.log(data);
        this.savedJobPost = data['content'];
        this.pages = new Array(data['totalPages']);
        console.log('hihih');
        console.log(this.savedJobPost);


      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  isSave(): boolean {
    if (_.find(this.savedJobPost, { jobtitle: this.jobDetail.jobtitle })) {
      return true;
    } else return false;


  }
  // check(){
  //   if (_.find(this.savedJobPost, { jobtitle: this.jobDetail.jobtitle })) {
  //     this.isSaved = true;
  //   } else this.isSaved = false;
  //   console.log('asdsdsd');
  //   console.log(this.isSaved);
  // }
  saveJobPost(dangerTpl, successTpl) {
    this.id = this.route.snapshot.params['id'];
    this.allJoblistService.saveJobPost(this.id)
      .subscribe(
        data => {
          console.log(data);
          //   this.isSaved =true;
          //  this.getJobDetail();
          window.location.reload();
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        },
        error => {
          console.log(error);
          //  this.isSave=false;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-', delay: 6000 });
        }
      );

  }
  deleteSaveJobPost(dangerTpl, successTpl) {
    this.id = this.route.snapshot.params['id'];
    this.allJoblistService.deleteSaveJobPost(this.id)
      .subscribe(
        data => {
          console.log(data);
          window.location.reload();
          // this.isSaved =false;
          // this.getJobDetail();
          // this.isSave=false;
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5', delay: 6000 });
        },
        error => {
          console.log(error);
          // this.isSave=true;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }

}
