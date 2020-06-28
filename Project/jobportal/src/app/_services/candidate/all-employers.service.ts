import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllEmployersService {
  private getAllEmployersURL = 'http://localhost:8080/candidate/allemployers';
  private getJobPostByEmployerURL = 'http://localhost:8080/candidate/allemployers';
  constructor(private http: HttpClient) { }
  getAllEmployers (pageNo: number)
  {
   return this.http.get(`${this.getAllEmployersURL}`+'?pageNo='+pageNo);  
  }
}
