import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetIndustryService {
  private getJobPostByIndustryURL='http://localhost:8080/candidate/getJobPostby';
  private searchJobPostURL = 'http://localhost:8080/home/search/jobposts';
  
  constructor(private http: HttpClient) { }
  searchJobPost(): Observable<any> {
    return this.http.get(`${this.searchJobPostURL}`);
  // return this.http.get(`${this.getJobPostByIndustryURL}`+ '?industry='+industry+'?pageNo='+pageNo);
 }
  getJobPostByIndustry(industry: string
    ): Observable<any> {
     return this.http.get(`${this.getJobPostByIndustryURL}?industry=${encodeURIComponent (industry)}`);
   // return this.http.get(`${this.getJobPostByIndustryURL}`+ '?industry='+industry+'?pageNo='+pageNo);
  }
  getJobPostByIndustryHavePage(industry: string
    , pageNo: number): Observable<any> {
     return this.http.get(`${this.getJobPostByIndustryURL}?industry=${encodeURIComponent (industry)}&pageNo=${pageNo}`);
   // return this.http.get(`${this.getJobPostByIndustryURL}`+ '?industry='+industry+'?pageNo='+pageNo);
  }
 
}
