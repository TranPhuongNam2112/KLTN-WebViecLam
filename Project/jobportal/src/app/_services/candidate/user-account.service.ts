import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private url = 'http://localhost:8080/candidate/myprofile';
  private createExperienceURL='http://localhost:8080/candidate/myprofile/addExperience';
  private deleteExperienceURL='http://localhost:8080/candidate/myprofile/removeExperience';
  private deleteEducationURL='http://localhost:8080/candidate/myprofile/removeEducation';
  constructor(private http: HttpClient) { }
 
  getAccounts(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  deleteExperience(id: number): Observable<any> {
    return this.http.delete(`${this.deleteExperienceURL}/${id}`, { responseType: 'text' });
  }
  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.deleteEducationURL}/${id}`, { responseType: 'text' });
  }
  createExperience(ex: Object): Observable<Object> {
    return this.http.post(`${this.createExperienceURL}`, ex,{ responseType: 'text' });
  }
  // updateExperience(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.updateurl}/${id}`, value);
  // }
}
