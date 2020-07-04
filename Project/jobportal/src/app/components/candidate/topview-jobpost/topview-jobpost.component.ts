
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
@Component({
  selector: 'app-topview-jobpost',
  templateUrl: './topview-jobpost.component.html',
  styleUrls: ['./topview-jobpost.component.scss']
})
export class TopviewJobpostComponent implements OnInit {
  topviewedjobposts : any;
  public pageNo: number = 0;
  public pages: Array<number>;
  jobDetail: JobPostDetails;
  constructor( private allJoblistService: AllJoblistService,
    private router: Router,
    private jobDetailService: JobDetailService,) { }

  ngOnInit(): void {
    this.getTopViewedJobposts();
  }
  getTopViewedJobposts(){
    this.allJoblistService.getTopViewedJobposts().subscribe(
      data => {
        console.log("top viewed jobpost:");
        console.log(data);
        this.topviewedjobposts = data;
        this.pages = new Array(data['totalPages']);
      },
      (error) => {
        console.log(error.error.message)
      }
    );
   
  }
  getJobDetail(id:number) {
   
    this.jobDetailService.getJobPostDetail(id)
      .subscribe(data => {
        this.jobDetail = data;
        console.log(data);
      }, error => console.log(error));
  }
  jobPostDetail(id: number) {
    this.router.navigate(['candidate/jobpost-detail', id]);
  } 
  jobPostDetailURL(id: number) {
    this.getJobDetail(id);
    console.log("ma buon ngu qua");
  }

}
