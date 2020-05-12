import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import { CandidateSummary } from 'src/app/_models/employer/candidateSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
@Component({
  selector: 'app-saveprofile',
  templateUrl: './saveprofile.component.html',
  styleUrls: ['./saveprofile.component.scss']
})
export class SaveprofileComponent implements OnInit {

  savedCandidate: CandidateSummary;
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
    this.getSavedCandidate();
  }

  ngOnInit(): void {
    this.savedCandidate = new CandidateSummary();
    this.getSavedCandidate();
  }
  isSavedCandidateEmpty(): boolean {
    let keys = Object.keys(this.savedCandidate);
    if (keys.length) { return false; }
    else return true;
  }
  getSavedCandidate() {
    this.allCandidateService.getSavedCandidate(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.savedCandidate = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
 

  deleteSavedCandidate(id: number, dangerTpl, successTpl) {
    this.allCandidateService.deleteSavedCandidate(id)
      .subscribe(
        data => {
          console.log(data);
          this.getSavedCandidate();
          // this.isSave=false;
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5', delay: 6000 });
        },
        error => {
          console.log(error);
          // this.isSave=true;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }

}
