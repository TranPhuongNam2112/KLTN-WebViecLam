import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateDetailService } from 'src/app/_services/employer/candidate-detail.service';
import { CandidateProfile } from 'src/app/_models/candidateProfile';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import { CandidateSummary } from 'src/app/_models/employer/candidateSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  id: number;
  candidateDetail: CandidateProfile;
  savedCandidate: CandidateSummary;
  save: CandidateSummary;
  all: string;
  public pageNo: number = 0;
  public pages: Array<number>;
  result = '';
  isSaved: boolean;
  showCV: boolean= false;
  constructor(
    private allCandidateService: AllCandidateService,
    private route: ActivatedRoute, 
    private router: Router,
    private candidateDetailService: CandidateDetailService,
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.savedCandidate = new CandidateSummary();
    this.getSavedCandidate();
    this.candidateDetail = new CandidateProfile();
    this.getCandidateDetail();
  }
  openCV(hihi) {
    window.open(hihi, "_blank");
  }
  getCandidateDetail() {
    this.id = this.route.snapshot.params['id'];
    this.candidateDetailService.getCandidateDetail(this.id)
      .subscribe(data => {
        this.candidateDetail = data;
        console.log(data);
      }, error => console.log(error));
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
  //đáng lẽ phải là candidateDetail.id mà api không trả về id
  isSave(): boolean {
    if (_.find(this.savedCandidate, { name: this.candidateDetail.name })) {
      return true;
    } else return false;
  }
  isExperiencesEmpty(): boolean {
    let keys = Object.keys(this.candidateDetail.experiences);
    if (keys.length) { return false; }
    else return true;
  }
  isJobTypes(): boolean {
    let keys = Object.keys(this.candidateDetail.jobtypes);
    if (keys.length) { return false; }
    else return true;
  }
  isEducationsEmpty(): boolean {
    let keys = Object.keys(this.candidateDetail.educations);
    if (keys.length) { return false; }
    else return true;
  }
  isCVEmpty(): boolean {
    let keys = Object.keys(this.candidateDetail.cv_Uri);
    if (keys.length) { return false; }
    else return true;
  }
  viewCV(){
    this.showCV=true;
  }
  saveCandidate(dangerTpl, successTpl) {
    this.id = this.route.snapshot.params['id'];
    this.allCandidateService.saveCandidate(this.id)
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
  deleteSavedCandidate(dangerTpl, successTpl) {
    this.id = this.route.snapshot.params['id'];
    this.allCandidateService.deleteSavedCandidate(this.id)
      .subscribe(
        data => {
          console.log(data);
          window.location.reload();
          // this.isSaved =false;
          // this.getJobDetail();
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
