import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManageAppliedJobsService {
  private getAppliedjobPostURL = 'http://localhost:8080/candidate/myappliedjobposts';
 
  constructor(private http: HttpClient) { }
  getAppliedJobPost (pageNo: number)
  {
   return this.http.get(`${this.getAppliedjobPostURL}`+'?pageNo='+pageNo);  
  }
 
}
