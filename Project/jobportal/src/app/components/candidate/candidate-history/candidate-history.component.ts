import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {JobPostSummary} from 'src/app/_models/jobPostSummary';
import {CandidateHistoryService} from 'src/app/_services/candidate/candidate-history.service';
import { AllJoblistService } from 'src/app/_services/candidate/all-joblist.service';
@Component({
  selector: 'app-candidate-history',
  templateUrl: './candidate-history.component.html',
  styleUrls: ['./candidate-history.component.scss']
})
export class CandidateHistoryComponent implements OnInit {
  topviewedjobposts : any;
  histories: Observable<JobPostSummary[]>;
 
  constructor( 
    private candidateHistoryService: CandidateHistoryService,
    private router: Router,
    private allJoblistService: AllJoblistService,
   
   ) { }
  
  ngOnInit(): void {
    this.getCandidateHistory();
    this.getTopViewedJobposts();
  }
  getCandidateHistory() {
    this.candidateHistoryService.getCandidateHistory( ).subscribe(
      data => {
        console.log(data);
        this.histories = data;
        this.router.navigate(['/candidate/history']);
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
 

}
