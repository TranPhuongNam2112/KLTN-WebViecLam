import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchJobpostService {
  private getAllJobTypeURL = 'http://localhost:8080/candidate/jobtypes';
  private getAllLocationsURL = 'http://localhost:8080/home/allLocations';
  private getAllIndustriesURL = 'http://localhost:8080/candidate/industries';
  private getAllKeywordsURL = 'http://localhost:8080/home/allKeywords';
  private searchJobPostURL = 'http://localhost:8080/home/search/jobposts';
  private searchresultsURL = 'http://localhost:8080/home/searchresults';
  private bugURL ='http://localhost:8080/home/search/jobposts';
  constructor(private http: HttpClient) { }
  getAllJobTypes(): Observable<any> {
    return this.http.get(`${this.getAllJobTypeURL}`);
  }
  getAllLocations(): Observable<any> {
    return this.http.get(`${this.getAllLocationsURL}`);
  }
  getAllIndustries(): Observable<any> {
    return this.http.get(`${this.getAllIndustriesURL}`);
  }
  getAllKeywords(): Observable<any> {
    return this.http.get(`${this.getAllKeywordsURL}`);
  }
  searchJobPost(job_title?: string,industry?: string, location?: string ): Observable<any> {
    return this.http.get(this.searchJobPostURL,
      {params: {jobtitle: job_title, industry: industry, joblocation:location}},
      )

  }
//   searchJobPost(job_title: string,industry: string, location: string ): Observable<any> {
  
//     return this.http.get(`${this.searchJobPostURL}`+'?job_title='+job_title+'?industry='+industry
//     +'&location='+location 
//     );  
// }
  
  searchJobPostBug(jobtitle: string,industry: string, location: string , pageNo: number): Observable<any> {
    return this.http.get(`${this.bugURL}`+'?jobtitle='+jobtitle+'&industry='+industry
    +'&joblocation='+location   +'&pageNo='+pageNo
    );  

  }
  searchresults(job_title?: string,industry?: string, location?: string ): Observable<any> {
    return this.http.get(this.searchresultsURL,
      {params: {jobtitle: job_title, industry: industry, joblocation:location}},
      )

  }
  
  searchJobPostHavePage(job_title: string,industry: string, location: string, pageNo: number): Observable<any> {
     return this.http.get(this.searchJobPostURL + '?pageNo='+pageNo, {params: 
      {
        jobtitle: job_title, industry: industry, joblocation:location,
      }}
      );
  
  }

}
