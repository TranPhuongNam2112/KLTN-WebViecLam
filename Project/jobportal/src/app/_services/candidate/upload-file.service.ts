import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private uploadImageUrl = 'http://localhost:8080/candidate/uploadProfileImage';
  private uploadCVUrl = 'http://localhost:8080/candidate/uploadCV';
  constructor(private http: HttpClient) { }
  // uploadProfileImage(image: File): Observable<Object> {
  //   return this.http.post(`${this.uploadImageUrl}`, image);
  // }
  postFile(fileToUpload: File): Observable<Object> {
   
    const formData: FormData = new FormData();
    formData.append('profileimage', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.uploadImageUrl}`, formData,{responseType: 'text'});

}
postCV(fileToUpload: File): Observable<Object> {
   
  const formData: FormData = new FormData();
  formData.append('CV', fileToUpload, fileToUpload.name);
  return this.http.post(`${this.uploadCVUrl}`, formData,{responseType: 'text'});

}
}
