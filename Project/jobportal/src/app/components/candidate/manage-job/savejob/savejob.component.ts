import { Component, OnInit } from '@angular/core';
import { User_Account } from 'src/app/_models/user_account';
import { Observable } from "rxjs";
import { UserAccountService } from '../../../../_services/candidate/user-account.service';
import { Router } from '@angular/router';
import { SaveJobpostService } from 'src/app/_services/candidate/save-jobpost.service';
import {JobPostSummary} from 'src/app/_models/jobPostSummary';
import { ToastService } from 'src/app/_services/toast-service.service';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
@Component({
  selector: 'app-savejob',
  templateUrl: './savejob.component.html',
  styleUrls: ['./savejob.component.scss']
})
export class SavejobComponent implements OnInit {
  //deo bik casi j 
  jobDetail: JobPostDetails;
  //deo bik cai j
  user_account: User_Account;
  saveJobPost: Observable<JobPostSummary[]>;
  public pageNo: number=0;
  public pages: Array<number>;
  constructor(
    private userAccountService: UserAccountService,
    private saveJobpostService: SaveJobpostService,
    private router: Router,
    public toastService: ToastService,
    private jobDetailService: JobDetailService,
  ) { }
  setPage(i, event:any){
    event.preventDefault();
    this.pageNo = i;
    this.getSaveJobPost();
  }

  ngOnInit(): void {
    this.getSaveJobPost();
    this.user_account = new User_Account();
    this.userAccountService.getAccounts()
      .subscribe(data => {
        console.log(data)
        this.user_account = data;
      }, error => console.log(error));
  }
  isSavedJobPostEmpty(): boolean {
    let keys = Object.keys(this.saveJobPost);
    if (keys.length) { return false; }
    else return true;
  }
  getSaveJobPost(){
    this.saveJobpostService.getSaveJobPost(this.pageNo).subscribe(
      data=> {
        console.log(data);
        this.saveJobPost=data['content'];
        this.pages= new Array(data['totalPages'])
      },
      (error)=> {
        console.log(error.error.message)
      }
    );
  }
  deleteSaveJobPost(id: number,dangerTpl,successTpl) {
    this.saveJobpostService.deleteSaveJobPost(id)
      .subscribe(
        data => {
          console.log(data);
          this.getSaveJobPost();
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5', delay: 6000 });
        },
        error => {
          console.log(error);
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }

  jobPostDetail(id: number) {
    this.router.navigate(['candidate/jobpost-detail', id]);
  }
  jobPostDetailURL(id: number) {
    this.getJobDetail(id);
    console.log("ma buon ngu qua");
  }
  getJobDetail(id:number) {
   
    this.jobDetailService.getJobPostDetail(id)
      .subscribe(data => {
        this.jobDetail = data;
        console.log(data);
      }, error => console.log(error));
  }

}
