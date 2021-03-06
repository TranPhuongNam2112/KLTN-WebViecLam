import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private getProfileurl = 'http://localhost:8080/candidate/myprofile';
  private createExperienceURL='http://localhost:8080/candidate/myprofile/addExperience';
  private deleteExperienceURL='http://localhost:8080/candidate/myprofile/experience/remove';

  private createEducationURL='http://localhost:8080/candidate/myprofile/addEducation';
  private deleteEducationURL='http://localhost:8080/candidate/myprofile/education/remove';
  private updateProfileURL ='http://localhost:8080/candidate/myprofile';
  private getJobTypeURL= 'http://localhost:8080/candidate/jobtypes';
  constructor(private http: HttpClient) { }
 
  getJobTypes(): Observable<any> {
    return this.http.get(`${this.getJobTypeURL}`);
  }
  getAccounts(): Observable<any> {
    return this.http.get(`${this.getProfileurl}`);
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
  createEducation(edu: Object): Observable<Object> {
    return this.http.post(`${this.createEducationURL}`, edu,{ responseType: 'text' });
  }
  updateProfile(value: any): Observable<Object> {
    return this.http.put(`${this.updateProfileURL}`, value, { responseType: 'text' });
  }
}
