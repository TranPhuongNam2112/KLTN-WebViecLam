import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllCandidateService } from 'src/app/_services/employer/all-candidate.service';
import { CandidateSummary } from 'src/app/_models/employer/candidateSummary';
import { SavedCandidate } from 'src/app/_models/employer/savedCandidate';;
import { ToastService } from 'src/app/_services/toast-service.service';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';    
@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss']
})
export class EmployerDashboardComponent implements OnInit {
  allCandidates: Observable<CandidateSummary[]>;
  savedCandidate: SavedCandidate;
  public pageNo: number = 0;
  isPresent: boolean;
  isSaved: boolean;
  result='';
  save: SavedCandidate;
  all: Observable<CandidateSummary[]>;
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
   
  }

  gettAllCandidate() {
    this.allCandidateService.gettAllCandidate(this.pageNo).subscribe
    (
      data => {
        this.allCandidates = data['content'];
        this.pages = new Array(data['totalPages']);
        this.all = this.allCandidates;
        this.save = this.savedCandidate;
        console.log("all");
        console.log(this.all);
        console.log("save");
        console.log(this.save);
      
      
        this.result = _.intersectionBy(this.all, this.save, 'id');
         console.log("result");
        console.log(this.result);
        let check = Object.keys(this.result).length;
        if(check){
          this.isSaved= true;
        } else this.isSaved= false;
        console.log("isSaved");
        console.log(this.isSaved);
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  // isSaved(): boolean {
  //   let keys = Object.keys(this.result);
  //   if (keys.length) { return true; }
  //   else return false;
  // }
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
        this.savedCandidate = data['content'];
        console.log(this.savedCandidate);
        this.pages = new Array(data['totalPages']);
        // this.isPresent = this.savedCandidate.some(function (el) { return el.name === 'Nguyễn Thị Ngọc Trân' });
        // console.log("pesent");
        // console.log(this.isPresent);
        //ok
        // this.keys = this.savedCandidate;
        // console.log("pesent");
        // console.log(this.keys);

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
  candidateDetail(id: number) {
    //this.router.navigate(['employer/candidate-detail', id]);
    let url = this.router.createUrlTree(['employer/candidate-detail', id]);
    window.open(url.toString(), '_blank');
  }

}
