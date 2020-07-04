import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { CrawledJoblistService} from 'src/app/_services/candidate/crawled-joblist.service';
import { CrawledJobPostSummary } from 'src/app/_models/candidate/crawledJobPostSummary';
import {SearchJobtypeService} from 'src/app/_services/employer/search-jobtype.service';
import {RecommendJobPost} from 'src/app/_models/candidate/recommendJobPost';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
@Component({
  selector: 'app-othersweb-joblist',
  templateUrl: './othersweb-joblist.component.html',
  styleUrls: ['./othersweb-joblist.component.scss']
})
export class OtherswebJoblistComponent implements OnInit {
  crawledJobPost : Observable <CrawledJobPostSummary[]>;
  recommendJobPost: Observable<JobPostSummary[]>;
  public pageNo: number = 1;
  public pages: Array<number>;
  websitename = 'timviec365';
  jobtype: '';
  jobDetail: JobPostDetails;
  topviewedjobposts : any;
  constructor( 
    private crawledJoblistService: CrawledJoblistService,
    private router: Router,
    private searchJobtypeService: SearchJobtypeService,
    private allJoblistService: AllJoblistService,
    private jobDetailService: JobDetailService,
   ) { }
   setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getOtherWebsJobList();
  }
  ngOnInit(): void {
    this.getOtherWebsJobList();
    this.getRecommendJobPost();
    this.getTopViewedJobposts();
   
  }
  getTopViewedJobposts(){
    this.allJoblistService.getHotCrawledJobpost(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.topviewedjobposts = data['content'];
        //this.router.navigate(['/candidate/hotcrawledjob'], { queryParams:  { page: this.pageNo} });
        
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  isRecommendJobPostEmpty(): boolean {
    let recommendkeys = Object.keys(this.recommendJobPost);
    if (recommendkeys.length) { return false; }
    else return true;
  }
  getRecommendJobPost() {
    this.allJoblistService.getRecommendJobPostNoPage().subscribe(
      data => {
        console.log(data);
        this.recommendJobPost = data['content'];
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
   pagesArray(): Array<number | string> {
    if (this.pages.length < 5) return Array.from(Array(this.pages), (_, x) => (x + 1))
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
  getOtherWebsJobList() {
    this.crawledJoblistService.getOtherWebs(this.websitename, this.pageNo).subscribe(
      data => {
        console.log(data);
        this.crawledJobPost = data['content'];
        this.pages = new Array(data['totalPages']);
        console.log("asjajskajskajs");
        console.log(this.pagesArray());
     //   this.router.navigate(['candidate/other-websites-job-lists', this.websitename,'page',this.pageNo]);
        this.router.navigate(['/candidate/other-websites-job-lists'], { queryParams:  { name:  this.websitename, page: this.pageNo  } });
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
          this.crawledJobPost = data['content'];
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
