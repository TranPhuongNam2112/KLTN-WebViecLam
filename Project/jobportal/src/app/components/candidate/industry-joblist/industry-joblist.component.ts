import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { GetIndustryService } from 'src/app/_services/candidate/get-industry.service';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { Observable } from "rxjs";
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
@Component({
  selector: 'app-industry-joblist',
  templateUrl: './industry-joblist.component.html',
  styleUrls: ['./industry-joblist.component.scss']
})
export class IndustryJoblistComponent implements OnInit {
  jobDetail: JobPostDetails;
  topviewedjobposts: any;
  industry: string;
  jobPosts: Observable<JobPostSummary[]>
  public pageNo: number = 0;
  public pages: Array<number> ;
  constructor(
    private getIndustryService: GetIndustryService,
    private route: ActivatedRoute,
    private router: Router,
    private allJoblistService: AllJoblistService,
    private jobDetailService: JobDetailService,
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getJobPostByIndustryHavePage(this.pageNo-1);
  }

  ngOnInit(): void {

    this.getJobPostByIndustry();
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
  // encoding(name: string){
  //   return encodeURIComponent(name)
  //   .replace(/%40/gi, '@')
  //   .replace (/%3A/gi, ':')
  //   .replace (/%24/gi, '$')
  //   .replace (/%2F/gi, '/');

  // }

  getJobPostByIndustryHavePage(pageNo:number) {
    // let test = this.route.snapshot.params['industry'];
    // this.industry = this.route.snapshot.params['industry'];
    this.industry = this.route.snapshot.queryParamMap.get('industry');
    console.log("industry encode:");
    console.log(this.industry);
    this.getIndustryService.getJobPostByIndustryHavePage(this.industry, pageNo)
      .subscribe(data => {
        console.log(data);
        this.jobPosts = data['content'];
        this.pages = new Array(data['totalPages']);
        this.router.navigate(['/candidate/industry-jobpost'], { queryParams: { industry: this.industry, page: pageNo+1 } });
      }, error => {
        console.log(error);
      }
      );
  }

  getJobPostByIndustry() {
    // let test = this.route.snapshot.params['industry'];
    // this.industry = this.route.snapshot.params['industry'];
    this.industry = this.route.snapshot.queryParamMap.get('industry');
    console.log("industry encode:");
    console.log(this.industry);
    this.getIndustryService.getJobPostByIndustry(this.industry)
      .subscribe(data => {
        console.log("job type search input:");
        // console.log(encodeURIComponent(this.industry));
        console.log(data);
        this.jobPosts = data['content'];
        this.pages = new Array(data['totalPages']);
       //this.router.navigate(['/candidate/industry-jobpost'], { queryParams: { industry: this.industry, page: this.pageNo } });
      }, error => {
        console.log(error);
        console.log("job type search input:");
        console.log(encodeURIComponent(this.industry));
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
  jobPostDetail(id: number) {
    // this.router.navigate(['candidate/jobpost-detail', id]);
    let url = this.router.createUrlTree(['candidate/jobpost-detail', id]);
    window.open(url.toString(), '_blank');
  }
  getCrawledJobs() {
    this.router.navigate(['candidate/other-websites-job-lists']);
  }
}
