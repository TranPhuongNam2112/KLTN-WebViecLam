import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
@Component({
  selector: 'app-hot-crawled-job',
  templateUrl: './hot-crawled-job.component.html',
  styleUrls: ['./hot-crawled-job.component.scss']
})
export class HotCrawledJobComponent implements OnInit {
  jobDetail: JobPostDetails;
  topviewedjobposts : any;
  public pageNo: number = 0;
  public pages: Array<number>;
  constructor( private allJoblistService: AllJoblistService,
     private router: Router,  
      private jobDetailService: JobDetailService,) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getTopViewedJobposts();
  }
  ngOnInit(): void {
    this.getTopViewedJobposts();
  }
  pagesArray(): Array<number | string> {
    if (this.pages.length < 5) return Array.from(Array(this.pages), (_, x) => (x + 1));
    const rawArray = [- 2, -1, 0, 1, 2].map(position => this.pageNo + position);
    const middlePartArray = rawArray.filter(position => (position > 1 && position < this.pages.length - 1));
    return [
    1,
    ...middlePartArray[0] > 2 ? ['...'] : [],
    ...middlePartArray,
    ...middlePartArray.slice(-1)[0] < this.pages.length - 2 ? ['...'] : [],
    this.pages.length - 1,
    ]
    }
  getTopViewedJobposts(){
    this.allJoblistService.getHotCrawledJobpost(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.topviewedjobposts = data['content'];
        this.pages = new Array(data['totalPages']);
        console.log("page top crawl");
        console.log(this.pages);
        this.router.navigate(['/candidate/hotcrawledjob'], { queryParams:  { page: this.pageNo} });
        
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  getJobDetail(id: number) {

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

}
