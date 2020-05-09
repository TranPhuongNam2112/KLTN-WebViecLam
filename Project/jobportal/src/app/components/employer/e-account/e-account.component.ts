import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
//them
import { UploadProfileimageService } from 'src/app/_services/employer/upload-profileimage.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../_services/toast-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
//them
@Component({
  selector: 'app-e-account',
  templateUrl: './e-account.component.html',
  styleUrls: ['./e-account.component.scss']
})
export class EAccountComponent implements OnInit {
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
  //thee,
  constructor(
    //upload
    private uploadProfileimageService: UploadProfileimageService,
    //test
    private httpClient: HttpClient,
    public toastService: ToastService,
    //test
    private router: Router
    //upload
  ) { }

  ngOnInit(): void {
    //upload
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
   
    //upload

  }
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
        if (data === "Uploaded successfully") {
          this.isSuccessful = true;
          console.log(this.isSuccessful);
          this._success.next(`Upload documents successfully.`);
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
