import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { GetIndustryService } from 'src/app/_services/candidate/get-industry.service';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { Observable } from "rxjs";
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
import { SearchJobpostService } from 'src/app/_services/candidate/search-jobpost.service';
import { AllIndustries } from 'src/app/_models/candidate/allIndustries';
import { AllJobTypes } from 'src/app/_models/candidate/allJobTypes';
import { AllKeyWords } from 'src/app/_models/candidate/allKeywords';
import { AllJLocations } from 'src/app/_models/candidate/allLocations';
import { CrawledJoblistService } from 'src/app/_services/candidate/crawled-joblist.service';
@Component({
  selector: 'app-search-jobpost-result',
  templateUrl: './search-jobpost-result.component.html',
  styleUrls: ['./search-jobpost-result.component.scss']
})
export class SearchJobpostResultComponent implements OnInit {
  jobTypes: AllJobTypes;
  industries: AllIndustries;
  locations: AllJLocations;
  keywords: AllKeyWords;
  jobtype: '';
  jobDetail: JobPostDetails;
  topviewedjobposts: any;
  industry: string;
  location: string ;
  job_title: string;
  countSearchResult: number;
  jobPosts: Observable<JobPostSummary[]>
  public pageNo: number = 0;
  public pages: Array<number>;
  constructor(
    private crawledJoblistService: CrawledJoblistService,
    private getIndustryService: GetIndustryService,
    private route: ActivatedRoute,
    private router: Router,
    private allJoblistService: AllJoblistService,
    private jobDetailService: JobDetailService,
    private searchJobpostService: SearchJobpostService
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.searchJobPostHavePage(this.pageNo - 1);
    this.searchJobPostBug();
  }

  ngOnInit(): void {
    this.searchJobPost();
    this.getTopViewedJobposts();
    this.searchresults();
    this.getAllIndustries();
    this.getAllLocations();
    this.getAllKeywords();
  

  }
  getAllIndustries() {
    this.crawledJoblistService.getAllIndustries()
      .subscribe(data => {
        console.log("industries");
        console.log(data);
        this.industries = data;
      }, error => console.log(error));
  }
  getAllLocations() {
    this.searchJobpostService.getAllLocations()
      .subscribe(data => {
        console.log("all locations: ");
        console.log(data);
        this.locations = data;
      }, error => console.log(error));
  }
  getAllKeywords() {
    this.searchJobpostService.getAllKeywords()
      .subscribe(data => {
        console.log("all keywords: ");
        this.keywords = data;
        console.log(this.keywords);
      }, error => console.log(error));
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
  searchJobPostHavePage(pageNo: number) {
    // let test = this.route.snapshot.params['industry'];
    // this.industry = this.route.snapshot.params['industry'];
    this.route.snapshot.paramMap.get('industry');
    this.location = this.route.snapshot.paramMap.get('joblocation');
    this.job_title = this.route.snapshot.paramMap.get('jobtitle');
    this.searchJobpostService.searchJobPostHavePage(this.job_title, this.industry, this.location, pageNo)
      .subscribe(data => {
        console.log(data);
        this.jobPosts = data['content'];
        this.pages = new Array(data['totalPages']);

      }, error => {
        console.log(error);
      }
      );
  }
  searchJobPostBug() {

    this.searchJobpostService.searchJobPostHavePage(this.job_title, this.industry, this.location, this.pageNo)
      .subscribe(data => {
        console.log(data);
        this.jobPosts = data['content'];
        this.pages = new Array(data['totalPages']);
        this.searchJobpostService.searchresults(this.job_title, this.industry, this.location)
          .subscribe(data => {
            console.log("jobpost search count reslouts:" + data);
            console.log(data);
            this.countSearchResult = data;
          
          }, error => {
            console.log(error);
          }
          );

      }, error => {
        console.log(error);
      }
      );


  }
  searchJobPost() {
    this.industry = this.route.snapshot.paramMap.get('industry');
    this.location = this.route.snapshot.paramMap.get('joblocation');
    this.job_title = this.route.snapshot.paramMap.get('jobtitle');
    this.searchJobpostService.searchJobPost(this.job_title, this.industry, this.location)
      .subscribe(data => {
        console.log("jobpost search:");
        console.log(data);
        this.jobPosts = data['content'];
        this.pages = new Array(data['totalPages']);

        // this.router.navigate(['/candidate/industry-jobpost'], { queryParams: { industry: this.industry, page: this.pageNo } });
      }, error => {
        console.log(error);
      }
      );

  }
  // searchJobPost() {
  //   this.industry = this.route.snapshot.paramMap.get('industry');
  //   this.location = this.route.snapshot.paramMap.get('joblocation');
  //   this.job_title = this.route.snapshot.paramMap.get('jobtitle');
  //   this.searchJobpostService.searchJobPost(this.job_title, this.industry, this.location)
  //     .subscribe(data => {
  //       console.log("candidate search result:");
  //       console.log(data);
  //       this.jobPosts = data['content'];
  //       this.pages = new Array(data['totalPages']);
  //       this.router.navigate(['/candidate/search-jobpost-result'],
  //         { queryParams: { job_title: this.job_title, industry: this.industry, location: this.location, page: this.pageNo } });
  //     }, error => {
  //       console.log(error);
  //     }
  //     );
  // }
  searchresults() {
    this.industry = this.route.snapshot.paramMap.get('industry');
    this.location = this.route.snapshot.paramMap.get('joblocation');
    this.job_title = this.route.snapshot.paramMap.get('jobtitle');
    this.searchJobpostService.searchresults(this.job_title, this.industry, this.location)
      .subscribe(data => {
        console.log("jobpost search count reslouts:" + data);
        console.log(data);
        this.countSearchResult = data;
      }, error => {
        console.log(error);
      }
      );
  }
  getTopViewedJobposts() {
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
  jobPostDetail(id: number) {
    // this.router.navigate(['candidate/jobpost-detail', id]);
    let url = this.router.createUrlTree(['candidate/jobpost-detail', id]);
    window.open(url.toString(), '_blank');
  }
  // getCrawledJobs() {
  //   this.router.navigate(['candidate/other-websites-job-lists']);
  // }
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
