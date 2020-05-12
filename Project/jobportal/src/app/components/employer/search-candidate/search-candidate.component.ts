import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import { CandidateSummary } from 'src/app/_models/employer/candidateSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.scss']
})
export class SearchCandidateComponent implements OnInit {
  allCandidates: Observable<CandidateSummary[]>;
  // savedCandidate: CandidateSummary;
  public pageNo: number = 0;
  public pages: Array<number>;
  constructor(
    private allCandidateService: AllCandidateService,
    private router: Router,
    public toastService: ToastService
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
 


}
