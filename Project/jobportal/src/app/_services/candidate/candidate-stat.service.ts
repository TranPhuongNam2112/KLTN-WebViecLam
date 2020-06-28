import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateStatService {
  private getCandidateStatsURL = 'http://localhost:8080/candidate/mystats';
  constructor(private http: HttpClient) { }
  
  getCandidateStats(): Observable<any> {
    return this.http.get(`${this.getCandidateStatsURL}`);
  }
}
