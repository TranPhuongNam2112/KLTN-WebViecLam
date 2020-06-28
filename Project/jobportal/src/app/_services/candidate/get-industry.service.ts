import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetIndustryService {
  private getJobPostByIndustryURL='http://localhost:8080/candidate/getJobPostby';
  constructor(private http: HttpClient) { }
  getJobPostByIndustry(industry: string, pageNo: number): Observable<any> {
    return this.http.get(`${this.getJobPostByIndustryURL}/${industry}`+'?pageNo='+pageNo);
  }
}
