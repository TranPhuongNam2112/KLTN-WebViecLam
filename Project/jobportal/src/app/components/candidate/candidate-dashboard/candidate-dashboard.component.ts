import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { CrawledJoblistService} from 'src/app/_services/candidate/crawled-joblist.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import { CrawledJobPostSummary } from 'src/app/_models/candidate/crawledJobPostSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
import { SearchJobtypeService } from 'src/app/_services/employer/search-jobtype.service';
//theem
import { Options } from 'select2';
import { Select2OptionData } from 'select2';
import { UserAccountService } from '../../../_services/candidate/user-account.service';
//get all employer
import {AllEmployersService} from 'src/app/_services/candidate/all-employers.service';
import {EmployerSummary} from 'src/app/_models/candidate/employerSummary';
//get all employer
import { HostListener, ViewChild} from '@angular/core'; 
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';

//component search start
import {AllIndustries} from 'src/app/_models/candidate/allIndustries';
import {AllJobTypes} from 'src/app/_models/candidate/allJobTypes';
import {AllKeyWords} from 'src/app/_models/candidate/allKeywords';
import {AllJLocations} from 'src/app/_models/candidate/allLocations';
import {SearchJobpostService} from 'src/app/_services/candidate/search-jobpost.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import {SearchJobPostRequests} from 'src/app/_models/candidate/searchJobPostRequest';
//component search end
//them
@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})

export class CandidateDashboardComponent implements OnInit {
  //theem
  public options: Options;
 
  //them
  //search component
  jobTypes: AllJobTypes;
  industries: AllIndustries;
  locations: AllJLocations;
  keywords: AllKeyWords;
  jobtype: '';
  industry: '';
  keyword: '';
  location: '';
  //search component
  websitename = 'jobsgo';
  allJobPost: Observable<JobPostSummary[]>;
  //crawled jobpost
  crawledJobPost : Observable <CrawledJobPostSummary[]>;
  // crawledJobPost: 
  topviewedjobposts : any;
  //crawled jobpost
  //get all employer
  allEmployers: Observable<EmployerSummary[]>;
  //get all employer
  public pageNo: number = 0;
  public pages: Array<number>;
  jobDetail: JobPostDetails;
  constructor(
    private allJoblistService: AllJoblistService,
    private crawledJoblistService: CrawledJoblistService,
    private searchJobtypeService: SearchJobtypeService,
    private router: Router,
    public toastService: ToastService,
    private userAccountService: UserAccountService,
    private allEmployersService:AllEmployersService,
    private jobDetailService: JobDetailService,
    //search component
    private searchJobpostService: SearchJobpostService,
    private config: NgSelectConfig,
    //search component
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.gettAllJobList();
  }

  ngOnInit(): void {
    //search component
    this.getAllIndustries();
    this.getAllLocations();
    this.getAllKeywords();
    //search component
    this.gettAllJobList();
    this.getTopViewedJobposts();
    this.getAllEmployers();
    this.crawledJoblistService.getCrawledJobPost(this.websitename).subscribe(
      data => {
        console.log(data);
        this.crawledJobPost = data['content'];
      },
      (error) => {
        console.log(error.error.message)
      }
    );
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '350'
    };
    this.userAccountService.getJobTypes()
    .subscribe(data => {
      console.log(data)
      this.jobTypes = data;
    }, error => console.log(error));
    
  }
  //search component
  getAllIndustries(){
    this.crawledJoblistService.getAllIndustries()
    .subscribe(data => {
      console.log("industries");
      console.log(data);
      this.industries = data;
    }, error => console.log(error));
  }
  getAllLocations(){
    this.searchJobpostService.getAllLocations()
    .subscribe(data => {
      console.log("all locations: ");
      console.log(data);
      this.locations = data;
    }, error => console.log(error));
  }
  getAllKeywords(){
    this.searchJobpostService.getAllKeywords()
    .subscribe(data => {
      console.log("all keywords: ");
      this.keywords = data;
      console.log(this.keywords);
    }, error => console.log(error));
  }
  searchJobPost(keyword: string, location: string, industry: string) {
     this.router.navigate(['candidate/search-jobpost-result',
     { jobtitle: keyword,
      joblocation : location,
      industry:  industry
      }]);
    
   
  }
  //search components
  getAllEmployers() {
    this.allEmployersService.getAllEmployers(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.allEmployers = data['content'];
        this.pages = new Array(data['totalPages']);
      
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  getTopViewedJobposts(){
    // this.allJoblistService.getTopViewedJobposts().subscribe(
    //   data => {
    //     console.log(data);
    //     this.topviewedjobposts = data;
        
    //   },
    //   (error) => {
    //     console.log(error.error.message)
    //   }
    // );
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
  isAllJobPostEmpty(): boolean {
    let keys = Object.keys(this.allJobPost);
    if (keys.length) { return false; }
    else return true;
  }
  isCrawledJobPostEmpty(): boolean {
    let crawledkeys = Object.keys(this.crawledJobPost);
    if (crawledkeys.length) { return false; }
    else return true;
  }
  searchJobType() {
    this.searchJobtypeService.searchJobByJobType(this.jobtype)
      .subscribe(
        data => {
          console.log(data);
          this.allJobPost = data['content'];
          this.pages = new Array(data['totalPages'])
          console.log("job type search input:");
          console.log(this.jobtype);
          console.log(`?x=${encodeURIComponent(this.jobtype)}`);
        },
        error => {
          console.log("job type search input:");
          console.log(this.jobtype);
          console.log(`?x=${encodeURIComponent(this.jobtype)}`);
          console.log(error);
        });
  }
  jobPostDetail(id: number) {
    this.router.navigate(['candidate/jobpost-detail', id]);
  }
  // crawledJobPostDetail(url: string) {
  //   this.router.navigate[url);
  // }
  getCrawledJobPost() {
    this.crawledJoblistService.getCrawledJobPost(this.websitename).subscribe(
      data => {
        console.log(data);
        this.crawledJobPost = data['content'];
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
    let url = this.router.createUrlTree(['candidate/industry-jobpost'],{ queryParams:  {   industry:  industry } });
   
    window.open(url.toString(), '_blank');
  }
  // searchIndustry() {
  //   this.searchJobtypeService.searchIndustry(this.industry)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.industries = data['content'];
  //         this.pages = new Array(data['totalPages'])

  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  jobPostByCompany(id: number, companyname: string) {
    //this.router.navigate(['candidate/companies', id]);
    this.router.navigate(['candidate/companies', id], { queryParams:  { companyname:  companyname } });
  }
}
