import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CandidateProfile } from 'src/app/_models/candidateProfile';
import { Observable } from "rxjs";
import { UserAccountService } from '../../../_services/candidate/user-account.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../_services/toast-service.service';
import {ExperiencesRequest} from "src/app/_models/candidate/experiencesRequest";
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  model: NgbDateStruct;
  active = 1;
  //ng
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  //ngToast
  show = true;

  //modal close
  closeResult = '';
  //get info candidate
  candidateProfile: CandidateProfile;
  //add exxperiecne
  responseMessage='';
  experien: ExperiencesRequest = new ExperiencesRequest();
  
  submitted = false;
  isSuccessful: boolean;
  //add experienece
  //test
  ex= false;
  //test
  constructor(
    private modalService: NgbModal,
    private userAccountService: UserAccountService,
    private router: Router,
    public toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
    this.candidateProfile = new CandidateProfile();
    this.userAccountService.getAccounts()
      .subscribe(data => {
        console.log(data)
        this.candidateProfile = data;
      }, error => console.log(error));
  }
  //add exxperienece
  newExperience(): void {
    this.submitted = false;
    this.experien = new ExperiencesRequest();
  }
  save(dangerTpl, successTpl) {
    this.userAccountService.createExperience(this.experien)
      .subscribe(data => {
        console.log(data);
      //   this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
      // }, error => { 
      //   console.log(error) ;
      //   this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
      this.responseMessage=data.toString();
      if(data==="Thêm thành công"){
        this.isSuccessful=true;
        this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        console.log(this.isSuccessful);
      } 
      else {
        this.isSuccessful=false;
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
      }
      });
    this.experien = new ExperiencesRequest();
  //  this.gotoList();
    this.close();
   
  }
  onSubmit(dangerTpl, successTpl) {
    this.submitted = true;
    this.save(dangerTpl, successTpl);
  }

  gotoList() {
    this.router.navigate(['candidate/manage']);
    
  }
  //ad exxperience
  //test
  addExperience(){
    this.ex=true;
  }
  //test
  deleteExperience(id: number,dangerTpl,successTpl) {
    this.userAccountService.deleteExperience(id)
      .subscribe(
        data => {
          console.log(data);
          // this.save(dangerTpl, successTpl);
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        },
        error => {
          console.log(error);
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }
  deleteEducation(id: number,dangerTpl,successTpl) {
    this.userAccountService.deleteEducation(id)
      .subscribe(
        data => {
          console.log(data);
          // this.save(dangerTpl, successTpl);
          this.toastService.show(successTpl, { classname: 'bg-success text-light  mt-5', delay: 6000 });
        },
        error => {
          console.log(error);
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }
  public changeSuccessMessage() {
    this._success.next(`Update profile successfully.`);
  }
  isExperiencesEmpty(): boolean {
    let keys = Object.keys(this.candidateProfile.experiences);
    if (keys.length) { return false; }
    else return true;
  }
  isEducationsEmpty(): boolean {
    let keys = Object.keys(this.candidateProfile.educations);
    if (keys.length) { return false; }
    else return true;
  }
  //ngToast
  close() {
    this.show = false;
    setTimeout(() => this.show = true, 5000);
  }
  //open modal
  openLg(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
