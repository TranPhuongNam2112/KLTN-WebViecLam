import { Component, OnInit, Injectable,ViewChild,ElementRef} from '@angular/core';
//them
import { UploadProfileimageService } from 'src/app/_services/employer/upload-profileimage.service';
import {EmployerProfile} from 'src/app/_models/employer/employerProfile';
import {EmployerProfileRequest} from 'src/app/_models/employer/employerProfileRequest';
import {ManageProfileService} from 'src/app/_services/employer/manage-profile.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../_services/toast-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {AllIndustries} from 'src/app/_models/candidate/allIndustries';
import { CrawledJoblistService} from 'src/app/_services/candidate/crawled-joblist.service';
import { Options } from 'select2';
import { Select2OptionData } from 'select2';
//upllad date
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
//update
//them
@Component({
  selector: 'app-e-account',
  templateUrl: './e-account.component.html',
  styleUrls: ['./e-account.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class EAccountComponent implements OnInit {
  toDate: NgbDate | null;
  model: NgbDateStruct;
  url = '';
  //theem
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  selectedFile: File;
  imageName: any;
  responseMessage = '';
  isSuccessful: boolean;
  isUpload = false;
  //thee,
  //get prfile+ update
  isEditProfileShown: boolean = false;
  employerProfile: EmployerProfile;
  employerProfileRequest: EmployerProfileRequest;
  //update
  submitted = false;
  establishmentdate: NgbDateStruct;
  //industry
  industries: AllIndustries;
   //ng select
  
   public options: Options;
   public exampleData: Array<Select2OptionData>;
   //ng select
  @ViewChild('fileUploader') fileUploader:ElementRef;
  resetFileUploader() { 
    this.fileUploader.nativeElement.value = null;
  }
  uploadrequest(){
    this.isUpload=true;
  }
  //update
  constructor(
    private manageProfileService: ManageProfileService,
    //upload
    private uploadProfileimageService: UploadProfileimageService,
    //upload
    //test
    private httpClient: HttpClient,
    public toastService: ToastService,
    //test
    private router: Router,
    //upload
    private ngbCalendar: NgbCalendar, 
    private calendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,
    //upload
    //industry
    private crawledJoblistService:CrawledJoblistService,
    //industry
  ) { 
    this.toDate = calendar.getToday();
  }

  ngOnInit(): void {
    //upload
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
   
    //upload
    //get profile
    this.employerProfile= new EmployerProfile();
    this.getProfile();
    //getprofile
    //upload Profile
    this.employerProfileRequest= new EmployerProfileRequest();
    
    //upLoad profile
    //industry
    this.industries = new AllIndustries();
   
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '500'
    };
    this.getAllIndustries();
    //industry

  }
  getAllIndustries(){
    this.crawledJoblistService.getAllIndustries()
    .subscribe(data => {
      console.log("industries");
      console.log(data);
      this.industries = data;
    }, error => console.log(error));
  }
  //get profile
  getProfile(){
    this.manageProfileService.getProfile()
    .subscribe(data => {
      console.log(data)
      this.employerProfile = data;
      this.employerProfileRequest=data;
      this.employerProfileRequest.website_url = this.employerProfile.websiteUrl;
      this.employerProfileRequest.mainaddress = this.employerProfile.main_address;
    }, error => console.log(error));
  }
  //get profile
  //update profile
  backProfileView(){
    this.isEditProfileShown= false;
    console.log(" isEditProfileShown"+ this.isEditProfileShown);
  }
   //open div edit Profile Information
   editProfileShow(){
    this.isEditProfileShown= true;
  }
  updateProfile(dangerTpl, successTpl) {
    this.manageProfileService.updateProfile(this.employerProfileRequest)
      .subscribe(data => {
        console.log(data);
        this.submitted = true;
        this.getProfile();
        this.backProfileView();
        this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
      }, error => { 
        console.log(error) ;
      
        this.isSuccessful=false;
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
      });
    }
  //update profile
  //upload
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    this.uploadProfileimageService.postFile(this.selectedFile)
      .subscribe(data => {
        console.log(data);
        this.responseMessage = data.toString();
        this.getProfile();
        if (data === "Uploaded successfully") {
          this.isSuccessful = true;
          this.isUpload = false;
          this.resetFileUploader();
          console.log(this.isSuccessful);
          this._success.next(`Upload logo successfully.`);
        }
        else {
          this.isSuccessful = false;

        }

      });
  }
  //upload

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
      }
    }
  }

}
