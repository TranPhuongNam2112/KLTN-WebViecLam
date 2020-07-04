import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrawledJoblistService} from 'src/app/_services/candidate/crawled-joblist.service';
import {AllIndustries} from 'src/app/_models/candidate/allIndustries';
import {AllJobTypes} from 'src/app/_models/candidate/allJobTypes';
import {AllKeyWords} from 'src/app/_models/candidate/allKeywords';
import {AllJLocations} from 'src/app/_models/candidate/allLocations';
import {SearchJobpostService} from 'src/app/_services/candidate/search-jobpost.service';
import { NgSelectConfig } from '@ng-select/ng-select';
@Component({
  selector: 'app-share-search-job',
  templateUrl: './share-search-job.component.html',
  styleUrls: ['./share-search-job.component.scss']
})
export class ShareSearchJobComponent implements OnInit {
  jobTypes: AllJobTypes;
  industries: AllIndustries;
  locations: AllJLocations;
  keywords: AllKeyWords;
  jobtype: '';
  industry: '';
  keyword: '';
  location: '';
  constructor(
    private crawledJoblistService: CrawledJoblistService,
    private router: Router,
    private searchJobpostService: SearchJobpostService,
    private config: NgSelectConfig,
  ) { }

  ngOnInit(): void {
    this.getAllIndustries();
    this.getAllLocations();
    this.getAllKeywords();
    this.industry= '';
    this.keyword = '';
    this.location = '';
  }
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
  

}
