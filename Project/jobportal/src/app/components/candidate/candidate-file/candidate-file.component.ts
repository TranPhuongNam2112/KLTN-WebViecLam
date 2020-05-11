import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { CandidateProfile } from 'src/app/_models/candidateProfile';
import {UploadFileService} from '../../../_services/candidate/upload-file.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../_services/toast-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UserAccountService } from '../../../_services/candidate/user-account.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-candidate-file',
  templateUrl: './candidate-file.component.html',
  styleUrls: ['./candidate-file.component.scss']
})
export class CandidateFileComponent implements OnInit {
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  selectedFile: File;
  imageName: any;
  responseMessage='';
  isSuccessful: boolean;
  candidateProfile: CandidateProfile;
  @ViewChild('fileUploader') fileUploader:ElementRef;

  resetFileUploader() { 
    this.fileUploader.nativeElement.value = null;
  }
  constructor(
    private userAccountService: UserAccountService,
       private uploadFileService: UploadFileService,
    //test
    private httpClient: HttpClient,
    public toastService: ToastService,
    //test
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);
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
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    this.uploadFileService.postCV(this.selectedFile)
    .subscribe(data => {
      console.log(data);
      this.responseMessage=data.toString();
      this.isSuccessful=true;
        console.log(this.isSuccessful);
        this.resetFileUploader();
        this._success.next(`Upload documents successfully.`);
    }, error => { 
      console.log(error) ;
      this.isSuccessful=false;
    
    });

    //   if(data==="Uploaded successfully"){
    //     this.isSuccessful=true;
    //     console.log(this.isSuccessful);
    //     this.resetFileUploader();
    //     this._success.next(`Upload documents successfully.`);
    //   } 
    //   else {
    //     this.isSuccessful=false;
     
    //   }
    
    // });
  }

}
