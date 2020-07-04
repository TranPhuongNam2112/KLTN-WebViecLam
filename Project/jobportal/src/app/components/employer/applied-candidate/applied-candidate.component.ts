import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import { CandidateSummary } from 'src/app/_models/employer/candidateSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-applied-candidate',
  templateUrl: './applied-candidate.component.html',
  styleUrls: ['./applied-candidate.component.scss'],

})
export class AppliedCandidateComponent implements OnInit {
  public pageNo: number = 0;
  public pages: Array<number>;
  savedCandidate: CandidateSummary;
  appliedCandidate: CandidateSummary;
  constructor(
    private allCandidateService: AllCandidateService,
    private router: Router,
    public toastService: ToastService,
    private route: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this.savedCandidate = new CandidateSummary();
    this.appliedCandidate = new CandidateSummary();
    this.getSavedCandidate();
    this.getAppliedCandidate();
  }
  getSavedCandidate() {
    this.allCandidateService.getSavedCandidate(this.pageNo).subscribe(
      data => {
        console.log("test");
        console.log(data);
        this.savedCandidate = data['content'];
        this.pages = new Array(data['totalPages']);
        console.log('hihih');
        console.log(this.savedCandidate);
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  getAppliedCandidate() {
    this.allCandidateService.getAppliedCandidate().subscribe(
      data => {
        console.log(data);
        this.appliedCandidate = data;
        //this.router.navigate(['/employer/history']);
      },
      (error) => {
        console.log(error.error.message)
      }

    );
  }
  candidateDetail(id: number) {
    //this.router.navigate(['employer/candidate-detail', id]);
    let url = this.router.createUrlTree(['employer/candidate-detail', id]);
    window.open(url.toString(), '_blank');
  }
  sendEMail(){
    window.open("https://mail.google.com/mail/u/0/?tab=wm#inbox", '_blank');
  }
  //đáng lẽ phải là candidateDetail.id mà api không trả về id
  // isSave(): boolean {
  //   if (_.find(this.savedCandidate, { id: this.appliedCandidate.id })) {
  //     return true;
  //   } else return false;
  // }
  isSave(): boolean {
    if (_.find(this.savedCandidate.id, { id: this.appliedCandidate.id })) {
      return true;
    } else return false;
  }
  saveCandidate(id: number, dangerTpl, successTpl) {
    this.allCandidateService.saveCandidate(id)
      .subscribe(
        data => {
          console.log(data);
          //   this.isSaved =true;
          //  this.getJobDetail();
          window.location.reload();
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
