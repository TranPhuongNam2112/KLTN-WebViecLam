import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import { CandidateSummary } from 'src/app/_models/employer/candidateSummary';
import { SavedCandidate } from 'src/app/_models/employer/savedCandidate';;
import { ToastService } from 'src/app/_services/toast-service.service';
@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss']
})
export class EmployerDashboardComponent implements OnInit {
  allCandidates: Observable<CandidateSummary[]>;
  savedCandidate: SavedCandidate;
  public pageNo: number = 0;
  public pages: Array<number>;
  // a = [
  //   { id: 1, name: 'foo' },
  //   { id: 2, name: 'bar' },
  //   { id: 3, name: 'test' }
  // ];

  // isPresent = this.a.some(function (el) { return el.id === 4 });

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
    this.savedCandidate = new SavedCandidate();

    this.getSavedCandidate();
    this.gettAllCandidate();
   //theem
   
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
  getSavedCandidate() {
    this.allCandidateService.getSavedCandidate(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.savedCandidate.id = data['content'];
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
          this.gettAllCandidate();
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
