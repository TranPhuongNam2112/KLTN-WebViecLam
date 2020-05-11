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
  private savejobpostURL='http://localhost:8080/candidate/savejobpost';

  constructor(private http: HttpClient) { }
  getSaveJobPost (pageNo: number)
  {
   return this.http.get(`${this.getsaveJobPosturl}`+'?pageNo='+pageNo);  
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
