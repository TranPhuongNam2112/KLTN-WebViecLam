import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class JobPostService {
  private url = 'http://localhost:8080/api/admin/getAllJobPosts';
  private detailurl='http://localhost:8080/api/admin/getJobLocation';
  private deleteurl='http://localhost:8080/api/admin/deleteJobPost';
  constructor(private http: HttpClient) { }
  getJobPosts (pageNo: number)
  {
   return this.http.get(`${this.url}`+'?pageNo='+pageNo);  
  }
  getJobPostId(id: number): Observable<any> {
    return this.http.get(`${this.detailurl}/${id}`);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.deleteurl}/${id}`, { responseType: 'text' });
  }
}
