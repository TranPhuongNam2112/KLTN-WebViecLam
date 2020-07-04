import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployerJobpostService {
  private getJobPostByEmployerURL = 'http://localhost:8080/candidate/employerjobposts';
  private getEmployerbyIdURL = 'http://localhost:8080/home/employers';
  constructor(private http: HttpClient) { }
  getJobPostByEmployer(companyname: string, pageNo: number): Observable<any> {
    return this.http.get(`${this.getJobPostByEmployerURL}/${companyname}`+'?pageNo='+pageNo);
  }
  getEmployerbyId(id: number): Observable<any> {
    return this.http.get(`${this.getEmployerbyIdURL}/${id}`);
  }
}
