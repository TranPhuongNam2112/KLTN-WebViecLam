import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {JobPostSummary} from 'src/app/_models/jobPostSummary';
import {GetIndustryService} from 'src/app/_services/candidate/get-industry.service';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-industry-joblist',
  templateUrl: './industry-joblist.component.html',
  styleUrls: ['./industry-joblist.component.scss']
})
export class IndustryJoblistComponent implements OnInit {
  topviewedjobposts : any;
  industry: string;
  jobPosts: Observable<JobPostSummary[]>
  public pageNo: number = 0;
  public pages: Array<number>;
  constructor(
    private getIndustryService: GetIndustryService,
    private route: ActivatedRoute,
    private router: Router,
    private allJoblistService: AllJoblistService,
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getJobPostByIndustry();
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
  getJobPostByIndustry() {
    this.industry = this.route.snapshot.params['industry'];
    this.getIndustryService.getJobPostByIndustry(this.industry, this.pageNo)
      .subscribe(data => {
      
        console.log(data);
        this.jobPosts = data['content'];
        this.pages = new Array(data['totalPages']);
        this.router.navigate(['/candidate/industry-jobpost',this.industry], { queryParams:  { page: this.pageNo} });
      }, error => console.log(error));
  }
  getTopViewedJobposts(){
    this.allJoblistService.getTopViewedJobposts().subscribe(
      data => {
        console.log(data);
        this.topviewedjobposts = data;
        
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
  getCrawledJobs() {
    this.router.navigate(['candidate/other-websites-job-lists']);
  } 
}
