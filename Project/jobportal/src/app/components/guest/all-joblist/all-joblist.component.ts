import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import {SearchJobtypeService} from 'src/app/_services/employer/search-jobtype.service';
@Component({
  selector: 'app-all-joblist',
  templateUrl: './all-joblist.component.html',
  styleUrls: ['./all-joblist.component.scss']
})
export class AllJoblistComponent implements OnInit {

  allJobPost: Observable<JobPostSummary[]>;
  public pageNo: number = 0;
  public pages: Array<number>;
  jobtype: '';
  constructor(
    private allJoblistService: AllJoblistService,
    private router: Router,
    private searchJobtypeService: SearchJobtypeService

  ) { }


  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.gettAllJobList();
  }

  ngOnInit(): void {
    this.gettAllJobList();
    
  }
  isAllJobPostEmpty(): boolean {
    let keys = Object.keys(this.allJobPost);
    if (keys.length) { return false; }
    else return true;
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
  searchJobType() {
    this.searchJobtypeService.searchJobByJobType(this.jobtype)
      .subscribe(
        data => {
          console.log(data);
          this.allJobPost = data['content'];
          this.pages = new Array(data['totalPages'])
        
        },
        error => {
          console.log(error);
        });
  }

}
