import { Component, OnInit , Injectable} from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CandidateProfile } from 'src/app/_models/candidateProfile';
import { Observable } from "rxjs";
import { User_Account } from 'src/app/_models/user_account';
import {CandidateProfileRequest} from 'src/app/_models/candidate/candidateProfileRequest';
import {AllJobTypes} from 'src/app/_models/candidate/allJobTypes';
import { UserAccountService } from '../../../_services/candidate/user-account.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../_services/toast-service.service';
import { Options } from 'select2';
import { Select2OptionData } from 'select2';
//test
/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        year : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        day : parseInt(date[2], 10),
       
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    // return date ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day  : null;
    return date?date.year+ this.DELIMITER + ('0'+date.month).slice(-2)
    + this.DELIMITER+('0'+date.day).slice(-2):null
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
   
        year : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        day : parseInt(date[2], 10),
       
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date?date.year+ this.DELIMITER + ('0'+date.month).slice(-2)
    + this.DELIMITER+('0'+date.day).slice(-2):null
  }
}

//test
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss'],
   // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})

export class ManageProfileComponent implements OnInit  {
  //get profile
  user_account: User_Account;
  doB: NgbDateStruct;
  startdate: NgbDateStruct;
  model: NgbDateStruct;
  enddate: NgbDateStruct;
  completiondate: NgbDateStruct;
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
  submitted = false;
  isSuccessful: boolean; 
  //div editProfile
  isEditProfileShown: boolean = false;
  candidateProfileRequest: CandidateProfileRequest;
  //ng select
  jobTypes: AllJobTypes;
  public options: Options;
  public exampleData: Array<Select2OptionData>;
  //ng select
   experienceArray=[
    {
      companyname:''	,
      jobtitle: '',
      startdate:'',
      enddate:'',
      description:''
    }
  ] ;
   requestObject ={
    experiences: this.experienceArray
  };
 //add experienece
 //add education
 educationArray=[
  {
    university_college:''	,
    major: '',
    startdate:'',
    completiondate:'',
    gpa:''
  }
] ;
 requestEducation ={
  educations: this.educationArray
};
 //add education
  constructor(
    private modalService: NgbModal,
    private userAccountService: UserAccountService,
    private router: Router,
    public toastService: ToastService,
    private ngbCalendar: NgbCalendar, 
    private dateAdapter: NgbDateAdapter<string>
  ) {
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }
  ngOnInit(): void {
    //ng select
    // this.exampleData = [
    //  'Intern','Fresher','Junior','Sernior'
    // ];
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '650'
    };
 //ng select
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
    this.candidateProfile = new CandidateProfile();
    this.candidateProfileRequest = new CandidateProfileRequest();
    this.jobTypes= new AllJobTypes();

    this.userAccountService.getAccounts()
    .subscribe(data => {
      console.log(data)
      this.candidateProfileRequest = data;
      this.candidateProfile = data;
    }, error => console.log(error));

    // this.userAccountService.getAccounts()
    //   .subscribe(data => {
    //     console.log(data)
    //     this.candidateProfile = data;
    //   }, error => console.log(error));

      this.userAccountService.getJobTypes()
      .subscribe(data => {
        console.log(data)
        this.jobTypes = data;
      }, error => console.log(error));
      
  }
  //add exxperienece
  // newExperience(): void {
  //   this.submitted = false;
  //   this.experien = new ExperiencesRequest();
  // }

  updateProfile(dangerTpl, successTpl) {
    this.userAccountService.updateProfile(this.candidateProfileRequest)
      .subscribe(data => {
        console.log(data);
        this.submitted = true;
        this.getAccounts();
        this.backAccountList();
        this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
      }, error => { 
        console.log(error) ;
      
        this.isSuccessful=false;
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
      });
    }
  //       this.responseMessage=data.toString();
  //       if(data==="Cập nhật thành công!"){
  //         this.submitted = true;
  //         console.log(data);
  //          this.isSuccessful=true;
  //         this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
  //         console.log(this.isSuccessful);
  //        this.getAccounts();
  //       } 
  //       else {
  //         console.log("hihi"+data);
  //         this.isSuccessful=false;
  //         this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
  //       }
  //     }
  //     , error => { 
  //       console.log(error) ;
  //       this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
  //     }
  //     );   
  // }
  saved(dangerTpl, successTpl){   
    this.userAccountService.createExperience(this.requestObject)
    .subscribe(data => {
      console.log(data);
      this.submitted = true;
      this.responseMessage=data.toString();
      this.isSuccessful=true;
      console.log(this.isSuccessful);      
      this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
      this.getAccounts();
    }, error => { 
      console.log(error) ;
      this.isSuccessful=false;
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
    });
  //this.experien = new ExperiencesRequest(); 
  }

  //add education
  addEducation(dangerTpl, successTpl){  
    this.userAccountService.createEducation(this.requestEducation)
    .subscribe(data => {
      this.responseMessage=data.toString();
      console.log(data);  
      this.submitted = true;
      this.isSuccessful=true;
      this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
      console.log(this.isSuccessful);
      this.getAccounts();
    }, error => { 
      console.log(error) ;
      this.isSuccessful=false;
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
    });
  //this.experien = new ExperiencesRequest(); 
  }
  //ad education
  // save(dangerTpl, successTpl) {
  //   this.userAccountService.createExperience(this.experien)
  //     .subscribe(data => {
  //       console.log(data);
  //     //   this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
  //     // }, error => { 
  //     //   console.log(error) ;
  //     //   this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
  //     this.responseMessage=data.toString();
  //     if(data==="Thêm thành công"){
  //       this.submitted = true;
  //       console.log(data);
  //       this.isSuccessful=true;
  //       this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
  //       console.log(this.isSuccessful);
  //     } 
  //     else {
  //       console.log("hihi"+data);
  //       console.log("hihi"+this.experien);
  //       this.isSuccessful=false;
  //       this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
  //     }
  //     });
  //   this.experien = new ExperiencesRequest();
  // //  this.gotoList();
  //   this.close();
   
  // }

  // onSubmit(dangerTpl, successTpl) {
  //   this.submitted = true;
  //   this.save(dangerTpl, successTpl);
  // }
  //ad exxperience
  getAccounts(){
    this.userAccountService.getAccounts()
    .subscribe(data => {
      console.log(data)
      this.user_account = data;
      this.candidateProfile = data;
    }, error => console.log(error));
  }
  // getJobTypes(){
  //   this.userAccountService.getJobTypes()
  //   .subscribe(data => {
  //     console.log(data)    
  //     this.candidateProfileRequest.jobtypes = data;
  //   }, error => console.log(error));
  // }
  getAccountsRequest(){
    this.userAccountService.getAccounts()
    .subscribe(data => {
      console.log(data)
      this.user_account = data;
      this.candidateProfileRequest = data;
    }, error => console.log(error));
  }

  backAccountList(){
    this.isEditProfileShown= false;
    console.log(" isEditProfileShown"+ this.isEditProfileShown);
  }
  deleteExperience(id: number,dangerTpl,successTpl) {
    this.userAccountService.deleteExperience(id)
      .subscribe(
        data => {
          console.log(data);
          this.getAccounts();
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
          this.getAccounts();
          // this.save(dangerTpl, successTpl);
          this.toastService.show(successTpl, { classname: 'bg-success text-light  mt-5', delay: 6000 });
        },
        error => {
          console.log(error);
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }
  //open div edit Profile Information
  editProfileShow(){
    this.isEditProfileShown= true;
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
