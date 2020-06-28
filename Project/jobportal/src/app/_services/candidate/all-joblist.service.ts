import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllJoblistService {
  private gettAllJobListURL = 'http://localhost:8080/home/alljobposts';
  private deleteurl='http://localhost:8080/candidate/savedjobposts';
  private getsaveJobPosturl = 'http://localhost:8080/candidate/savedjobposts';
  private test = 'http://localhost:8080/candidate/savedjobposts';
  private savejobpostURL='http://localhost:8080/candidate/savejobpost';
  private getRecommendJobPostURL = 'http://localhost:8080/candidate/recommendedjobposts';
  private getRecommendJobPostNoPageURL = 'http://localhost:8080/candidate/recommendedjobposts';
  private getTopViewedJobpostsURL = 'http://localhost:8080/home/topviewedjobposts';
  constructor(private http: HttpClient) { }
  getTopViewedJobposts ()
  {
   return this.http.get(`${this.getTopViewedJobpostsURL}`);  
  }
  getRecommendJobPost (pageNo: number)
  {
   return this.http.get(`${this.getRecommendJobPostURL}`+'?pageNo='+pageNo);  
  }
  getRecommendJobPostNoPage ()
  {
   return this.http.get(`${this.getRecommendJobPostNoPageURL}`);  
  }
  getSaveJobPost (pageNo: number)
  {
   return this.http.get(`${this.getsaveJobPosturl}`+'?pageNo='+pageNo);  
  }
  getSaveJobPostTest ()
  {
   return this.http.get(this.test);  
  }
  gettAllJobList (pageNo: number)
  {
   return this.http.get(`${this.gettAllJobListURL}`+'?pageNo='+pageNo);  
  }
  saveJobPost(id: number): Observable<any> {
    return this.http.post(`${this.savejobpostURL}/${id}`,id, { responseType: 'text' });
  }
  deleteSaveJobPost(id: number): Observable<any> {
    return this.http.delete(`${this.deleteurl}/${id}`, { responseType: 'text' });
  }
   
}
