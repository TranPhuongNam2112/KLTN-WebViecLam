import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateHistoryService {
  private getCandidateHistoryURL='http://localhost:8080/candidate/history';
  constructor(private http: HttpClient) { }
  getCandidateHistory( ): Observable<any> {
    return this.http.get(`${this.getCandidateHistoryURL}`);
  }
}
