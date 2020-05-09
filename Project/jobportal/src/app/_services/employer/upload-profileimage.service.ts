import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadProfileimageService {
  private uploadProfileImageURL = 'http://localhost:8080/employer/uploadProfileImage';
  
  constructor(private http: HttpClient) { }
  postFile(fileToUpload: File): Observable<Object> {
   
    const formData: FormData = new FormData();
    formData.append('profileimage', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.uploadProfileImageURL}`, formData,{responseType: 'text'});
}

}
