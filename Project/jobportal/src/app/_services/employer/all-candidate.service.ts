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
  private getRecommendCandidateuURL = 'http://localhost:8080/employer/recommendedcandidates';
  private getAppliedCandidateURL = 'http://localhost:8080/employer/appliedcandidates';
  constructor(private http: HttpClient) { }
 
  gettAllCandidate (pageNo: number)
  {
   return this.http.get(`${this.gettAllCandidateURL}`+'?pageNo='+pageNo);  
  }
  getAppliedCandidate( ): Observable<any> {
    return this.http.get(`${this.getAppliedCandidateURL}`);
  }
  getRecommendCandidate (pageNo: number)
  {
   return this.http.get(`${this.getRecommendCandidateuURL}`+'?pageNo='+pageNo);  
  }
  saveCandidate(id: number): Observable<any> {
    return this.http.post(`${this.saveCandidateURL}/${id}`,id, { responseType: 'text' });
  }
  getSavedCandidate (pageNo: number)
  {
   return this.http.get(`${this.deleteSavedCandidateURL}`+'?pageNo='+pageNo);  
  }
  getSavedCandidatehihi ()
  {
   return this.http.get(`${this.deleteSavedCandidateURL}`);  
  }
  deleteSavedCandidate(id: number): Observable<any> {
    return this.http.delete(`${this.getSavedCandidateuURL}/${id}`, { responseType: 'text' });
  }
}
