import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { CrawledJoblistService } from 'src/app/_services/candidate/crawled-joblist.service';
import {AllIndustries} from 'src/app/_models/candidate/allIndustries';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { CrawledJobPostSummary } from 'src/app/_models/candidate/crawledJobPostSummary';
@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.scss']
})
export class GuestDashboardComponent implements OnInit {
  topviewedjobposts : any;
  industries: AllIndustries;
  public pageNo: number = 0;
  public pages: Array<number>;
  jobDetail: JobPostDetails;
  //crawled jobpost
  constructor(
    private allJoblistService: AllJoblistService,
    private crawledJoblistService: CrawledJoblistService,
    private router: Router,
    private jobDetailService: JobDetailService,
  ) { }


  ngOnInit(): void {
    this.getAllIndustries();
    this.getTopViewedJobposts();
  }
  getAllIndustries(){
    this.crawledJoblistService.getAllIndustries()
    .subscribe(data => {
      console.log("industries");
      console.log(data);
      this.industries = data;
    }, error => console.log(error));
  }
  getTopViewedJobposts(){
    this.allJoblistService.getHotCrawledJobpost(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.topviewedjobposts = data['content'];
        
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
  jobPostDetailURL(id: number) {
    this.getJobDetail(id);
    console.log("ma buon ngu qua");
  }
  getJobPostbyIndusty(industry: string) {
    let url = this.router.createUrlTree(['guest/industry-jobpost'],{ queryParams:  {   industry:  industry } });
    window.open(url.toString(), '_blank');
  }
}
