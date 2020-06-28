import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateDetailService {
  private candidateDetailURL='http://localhost:8080/employer/candidates';
  constructor(private http: HttpClient) { }
  getCandidateDetail(id: number): Observable<any> {
    return this.http.get(`${this.candidateDetailURL}/${id}`);
  }
}
