import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ManagejobService {
  private getJobPostURL = 'http://localhost:8080/employer/myjobposts';
  private detailJobPosturl='http://localhost:8080/employer/getJobPostbyId';
  private deleteJobPosturl='http://localhost:8080/employer/deleteJobPost';


  private createJobPostURL='http://localhost:8080/employer/createpost';

  private updateJobPostURL='http://localhost:8080/employer/myjobposts';
  constructor(private http: HttpClient) { }
  getJobPosts (pageNo: number)
  {
   return this.http.get(`${this.getJobPostURL}`+'?pageNo='+pageNo);  
  }
  getJobPostDetail(id: number): Observable<any> {
    return this.http.get(`${this.detailJobPosturl}/${id}`);
  }
  deleteJobPost(id: number): Observable<any> {
    return this.http.delete(`${this.deleteJobPosturl}/${id}`, { responseType: 'text' });
  }
  // createJobPost(jobPost: Object): Observable<Object> {
  //   return this.http.post(`${this.createJobPostURL}`, jobPost);
  // }
  createJobPost(jobPost: Object): Observable<Object> {
    return this.http.post(`${this.createJobPostURL}`, jobPost,{ responseType: 'text' });
  }
  updateJobPost( id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateJobPostURL}/${id}`,value, { responseType: 'text' });
  }
  // updateJobPost(value: any): Observable<Object> {
  //   return this.http.put(`${this.updateJobPostURL}`, value, { responseType: 'text' });
  // }
}
