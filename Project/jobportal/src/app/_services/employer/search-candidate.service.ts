import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchCandidateService {
  private getAllWorkTitleURL = 'http://localhost:8080/employer/worktitles';
  private searchCandidateURL = 'http://localhost:8080/employer/search'
  constructor(private http: HttpClient) { }
  getAllWorkTitles(): Observable<any> {
    return this.http.get(`${this.getAllWorkTitleURL}`);
  }
  searchCandidate(industry: string,jobtype: string, location: string , worktitle: string, experience: number): Observable<any> {
  
      return this.http.get(`${this.searchCandidateURL}`+'?industry='+industry+'&jobtype='+jobtype
      +'&location='+location   +'&worktitle='+worktitle +'&experience='+ experience
      );  
  }
}
