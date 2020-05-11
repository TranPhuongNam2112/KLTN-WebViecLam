import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
@Component({
  selector: 'app-alljoblist',
  templateUrl: './alljoblist.component.html',
  styleUrls: ['./alljoblist.component.scss']
})
export class AlljoblistComponent implements OnInit {
  allJobPost: Observable<JobPostSummary[]>;
  savedJobPost: JobPostSummary;
  //  isSave= false; 
  public pageNo: number = 0;
  public pages: Array<number>;
  constructor(
    private allJoblistService: AllJoblistService,
    private router: Router,
    public toastService: ToastService
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.gettAllJobList();
  }

  ngOnInit(): void {
    this.savedJobPost = new JobPostSummary();
    this.getSaveJobPost();
    this.gettAllJobList();
    
  }
  getSaveJobPost() {
    this.allJoblistService.getSaveJobPost(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.savedJobPost = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  gettAllJobList() {
    this.allJoblistService.gettAllJobList(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.allJobPost = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  saveJobPost(id: number, dangerTpl, successTpl) {
    this.allJoblistService.saveJobPost(id)
      .subscribe(
        data => {
          console.log(data);
          //  this.isSave= true;
          this.gettAllJobList();
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        },
        error => {
          console.log(error);
          //  this.isSave=false;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-', delay: 6000 });
        }
      );

  }

  deleteSaveJobPost(id: number, dangerTpl, successTpl) {
    this.allJoblistService.deleteSaveJobPost(id)
      .subscribe(
        data => {
          console.log(data);
          this.gettAllJobList();
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
