import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import {RecommendCandidate} from 'src/app/_models/employer/recommendCandidate';
import {EmployerHistoryService} from 'src/app/_services/employer/employer-history.service';
import {CandidateSummary} from 'src/app/_models/employer/candidateSummary';
@Component({
  selector: 'app-employer-history',
  templateUrl: './employer-history.component.html',
  styleUrls: ['./employer-history.component.scss']
})
export class EmployerHistoryComponent implements OnInit {
  recommendCandidate: Observable<RecommendCandidate[]>;
  histories: Observable<CandidateSummary[]>;
  public pageNo: number = 0;
  public pages: Array<number>;
  constructor(
    private allCandidateService: AllCandidateService,
    private router: Router,
    private employerHistoryService: EmployerHistoryService
  ) { }

  ngOnInit(): void {
    this.getRecommendCandidate();
    this.getEmployerHistory();
  }
  getEmployerHistory() {
    this.employerHistoryService.getEmployerHistory().subscribe(
      data => {
        console.log(data);
        this.histories = data;
        //this.router.navigate(['/employer/history']);
      },
      (error) => {
        console.log(error.error.message)
      }
     
    );
  }
  isRecommendCandidateEmpty(): boolean {
    let recommendkeys = Object.keys(this.recommendCandidate);
    if (recommendkeys.length) { return false; }
    else return true;
  }

  getRecommendCandidate() {
    this.allCandidateService.getRecommendCandidate(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.recommendCandidate = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  candidateDetail(id: number) {
    this.router.navigate(['employer/candidate-detail', id]);
  }

}
