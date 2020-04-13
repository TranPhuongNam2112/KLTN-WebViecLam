import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobLocationService {
  private url = 'http://localhost:8080/api/admin/getAllLocations';
  constructor(private http: HttpClient) { }
  getJobLocations (pageNo: number)
  {
   return this.http.get(`${this.url}`+'?pageNo='+pageNo);  
  }
}
