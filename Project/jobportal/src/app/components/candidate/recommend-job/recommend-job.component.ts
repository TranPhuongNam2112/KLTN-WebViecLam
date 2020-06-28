import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import {RecommendJobPost} from 'src/app/_models/candidate/recommendJobPost';
import {SearchJobtypeService} from 'src/app/_services/employer/search-jobtype.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
@Component({
  selector: 'app-recommend-job',
  templateUrl: './recommend-job.component.html',
  styleUrls: ['./recommend-job.component.scss']
})
export class RecommendJobComponent implements OnInit {
  recommendJobPost: Observable<JobPostSummary[]>;
  // savedCandidate: CandidateSummary;
  public pageNo: number = 0;
  public pages: Array<number>;
  jobtype: '';
  jobDetail: JobPostDetails;
  constructor(
    private allJoblistService: AllJoblistService,
    private router: Router,
    private searchJobtypeService:SearchJobtypeService,
    private jobDetailService: JobDetailService,
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getRecommendJobPost();
  }
  ngOnInit(): void {
    this.getRecommendJobPost();
   
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
  getRecommendJobPost() {
    this.allJoblistService.getRecommendJobPost(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.recommendJobPost = data['content'];
        this.pages = new Array(data['totalPages']);
        this.router.navigate(['/candidate/recommendjob'] ,{ queryParams:  { page: this.pageNo} });
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  searchJobType() {
    this.searchJobtypeService.searchJobByJobType(this.jobtype)
      .subscribe(
        data => {
          console.log(data);
          this.recommendJobPost = data['content'];
          this.pages = new Array(data['totalPages'])
        
        },
        error => {
          console.log(error);
        });
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
