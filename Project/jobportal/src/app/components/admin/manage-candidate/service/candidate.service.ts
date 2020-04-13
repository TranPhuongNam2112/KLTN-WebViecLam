import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private url = 'http://localhost:8080/api/admin/getAllCandidates';
  private detailurl='http://localhost:8080/api/admin/getCandidate';
  constructor(private http: HttpClient) { }
  getCandidates (pageNo: number)
  {
   return this.http.get(`${this.url}`+'?pageNo='+pageNo);  
  }
 
  getCandidatebyId(id: number): Observable<any> {
    return this.http.get(`${this.detailurl}/${id}`);
  }
}
