import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import { CandidateSummary } from 'src/app/_models/employer/candidateSummary';
import { RecommendCandidate } from 'src/app/_models/employer/recommendCandidate';
import { ToastService } from 'src/app/_services/toast-service.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AllIndustries } from 'src/app/_models/candidate/allIndustries';
import { AllJobTypes } from 'src/app/_models/candidate/allJobTypes';
import { AllWorkTitles } from 'src/app/_models/candidate/allWorkTitles';
import { AllJLocations } from 'src/app/_models/candidate/allLocations';
import { SearchCandidateService } from 'src/app/_services/employer/search-candidate.service';
import { SearchJobpostService } from 'src/app/_services/candidate/search-jobpost.service';
import { CrawledJoblistService } from 'src/app/_services/candidate/crawled-joblist.service';
@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.scss']
})
export class SearchCandidateComponent implements OnInit {
  allCandidates: Observable<CandidateSummary[]>;
  recommendCandidate: Observable<RecommendCandidate[]>;
  // savedCandidate: CandidateSummary;
  public pageNo: number = 0;
  public pages: Array<number>;
  //re
  public pageNore: number = 0;
  public pagesre: Array<number>;
  //search
  jobTypes: AllJobTypes;
  industries: AllIndustries;
  locations: AllJLocations;
  jobTitles: AllWorkTitles;

  jobtype: '';
  industry: '';
  worktitle: '';
  location: '';
  experience : number = 0;
  //search
  constructor(
    private allCandidateService: AllCandidateService,
    private router: Router,
    public toastService: ToastService,
    private config: NgSelectConfig,
    private searchCandidateService: SearchCandidateService,
    private searchJobpostService: SearchJobpostService,
    private crawledJoblistService: CrawledJoblistService
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.gettAllCandidate();
  }
  

  ngOnInit(): void {
    // this.savedCandidate = new CandidateSummary();
    // this.getSavedCandidate();
    this.gettAllCandidate();
    this.getRecommendCandidate();
    this.getAllIndustries();
    this.getAllLocations();
    this.getAlLJobTypes();
    this.getAllWorkTitles();
  }
  getAlLJobTypes() {
    this.searchJobpostService.getAllJobTypes()
      .subscribe(data => {
        console.log("all job types");
        console.log(data);
        this.jobTypes = data;
      }, error => console.log(error));
  }
  getAllIndustries() {
    this.crawledJoblistService.getAllIndustries()
      .subscribe(data => {
        console.log("all industries");
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
  getAllWorkTitles() {
    this.searchCandidateService.getAllWorkTitles()
      .subscribe(data => {
        console.log("all wwork tiktle: ");
        this.jobTitles = data;
        console.log(this.jobTitles);
      }, error => console.log(error));
  }
  reload(){
   
    this.router.navigate(['/employer/searchcandidate'])
  .then(() => {
    window.location.reload();
  });
  }
  isCandidateEmpty(): boolean {
    let keys = Object.keys(this.allCandidates);
    if (keys.length) { return false; }
    else return true;
  }
  searchCandiate() {

    this.searchCandidateService.searchCandidate(this.industry, this.jobtype, this.location, this.worktitle, this.experience)
      .subscribe(data => {
        console.log("candidate search result:");
        console.log(data);
        this.allCandidates = data['content'];
        this.pages = new Array(data['totalPages']);
        this.router.navigate(['/employer/searchcandidate'],
         { queryParams: { industry: this.industry,jobtype: this.jobtype, location: this.location,worktitle: this.worktitle,experience: this.experience, page: this.pageNo } });
      }, error => {
        console.log(error);
      }
      );
  }
  gettAllCandidate() {
    this.allCandidateService.gettAllCandidate(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.allCandidates = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  getRecommendCandidate() {
    this.allCandidateService.getRecommendCandidate(this.pageNore).subscribe(
      data => {
        console.log(data);
        this.recommendCandidate = data['content'];
        this.pagesre = new Array(data['totalPages']);
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  saveCandidate(id: number, dangerTpl, successTpl) {
    this.allCandidateService.saveCandidate(id)
      .subscribe(
        data => {
          console.log(data);
          //  this.isSave= true;
          this.gettAllCandidate();
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        },
        error => {
          console.log(error);
          //  this.isSave=false;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-', delay: 6000 });
        }
      );

  }
  candidateDetail(id: number) {
    this.router.navigate(['employer/candidate-detail', id]);
  }
  isRecommendCandidateEmpty(): boolean {
    let recommendkeys = Object.keys(this.recommendCandidate);
    if (recommendkeys.length) { return false; }
    else return true;
  }

}
