import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllCandidateService {
  private gettAllCandidateURL = 'http://localhost:8080/employer/candidates';
  private saveCandidateURL='http://localhost:8080/employer/save';
  private deleteSavedCandidateURL='http://localhost:8080/employer/savedcandidates';
  private getSavedCandidateuURL = 'http://localhost:8080/employer/savedcandidates';
 
  constructor(private http: HttpClient) { }
 
  gettAllCandidate (pageNo: number)
  {
   return this.http.get(`${this.gettAllCandidateURL}`+'?pageNo='+pageNo);  
  }
  saveCandidate(id: number): Observable<any> {
    return this.http.post(`${this.saveCandidateURL}/${id}`,id, { responseType: 'text' });
  }
  getSavedCandidate (pageNo: number)
  {
   return this.http.get(`${this.deleteSavedCandidateURL}`+'?pageNo='+pageNo);  
  }
  deleteSavedCandidate(id: number): Observable<any> {
    return this.http.delete(`${this.getSavedCandidateuURL}/${id}`, { responseType: 'text' });
  }
}
