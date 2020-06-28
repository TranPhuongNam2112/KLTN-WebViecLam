import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchJobtypeService {
  private searchJobTypeURL = 'http://localhost:8080/home';
  private searchIndustryURL = 'http://localhost:8080/home/searchIndustryByName';
  constructor(private http: HttpClient) { }
  searchJobByJobType(jobtype: string): Observable<any> {
    return this.http.get(`${this.searchJobTypeURL}/${jobtype}`);
  }
  searchIndustry(industry: string): Observable<any> {
    return this.http.get(`${this.searchIndustryURL}/${industry}`);
  }

}
