import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import {RecommendCandidate} from 'src/app/_models/employer/recommendCandidate';
@Component({
  selector: 'app-recommend-candidate',
  templateUrl: './recommend-candidate.component.html',
  styleUrls: ['./recommend-candidate.component.scss']
})
export class RecommendCandidateComponent implements OnInit {
  recommendCandidate: Observable<RecommendCandidate[]>;
  // savedCandidate: CandidateSummary;
  public pageNo: number = 0;
  public pages: Array<number>;

  constructor(
    private allCandidateService: AllCandidateService,
    private router: Router
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getRecommendCandidate();
  }
  ngOnInit(): void {
    this.getRecommendCandidate();
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
