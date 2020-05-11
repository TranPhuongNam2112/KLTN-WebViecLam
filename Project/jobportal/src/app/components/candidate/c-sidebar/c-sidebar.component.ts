import { Component, OnInit } from '@angular/core';
import { CandidateProfile } from 'src/app/_models/candidateProfile';
import { User_Account } from 'src/app/_models/user_account';
import { Observable } from "rxjs";
import { UserAccountService } from '../../../_services/candidate/user-account.service';
import {UploadFileService} from '../../../_services/candidate/upload-file.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../_services/toast-service.service';
//test
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-c-sidebar',
  templateUrl: './c-sidebar.component.html',
  styleUrls: ['./c-sidebar.component.scss']
})
export class CSidebarComponent implements OnInit {
  //test
  selectedFile: File;
  user_account: User_Account;
  message: string;
  imageName: any;
  responseMessage='';
  isSuccessful: boolean;
  fileToUpload: File = null;
  public imagePath;
  imgURL: any;
  
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  //test
  candidateProfile: CandidateProfile;
  //navbar
  active = 'middle';
  constructor(
    private userAccountService: UserAccountService,
    private uploadFileService: UploadFileService,
    //test
    private httpClient: HttpClient,
    public toastService: ToastService,
    //test
    private router: Router) { }

  ngOnInit(): void {
    this.candidateProfile = new CandidateProfile();
    this.user_account= new User_Account();
    this.userAccountService.getAccounts()
      .subscribe(data => {
        console.log(data)
        this.user_account = data;
        this.candidateProfile = data;
      }, error => console.log(error));
  }
  
  //lkllklk
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload(dangerTpl, successTpl) {
    console.log(this.selectedFile);
    this.uploadFileService.postFile(this.selectedFile)
    .subscribe(data => {
      console.log(data);
      this.isSuccessful=true;
      console.log(this.isSuccessful);
      this.responseMessage=data.toString();
      this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
    }, error => { 
      console.log(error) ;
      this.isSuccessful=false;
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
    });

    //   if(data==="Uploaded successfully"){
    //     this.isSuccessful=true;
    //     this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 3000 });
    //     console.log(this.isSuccessful);
    //   } 
    //   else {
    //     this.isSuccessful=false;
    //     this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 3000 });
    //   }
    
    // });
  }
  


}
