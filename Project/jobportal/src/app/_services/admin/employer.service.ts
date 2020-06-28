import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  // private url = 'http://localhost:8080/api/admin/getAllEmployers';
  private gettAllEmployerURL = 'http://localhost:8080/api/users/employers';
  private detailurl='http://localhost:8080/api/users/employers';
  constructor(private http: HttpClient) { }
  gettAllEmployer (pageNo: number)
  {
   return this.http.get(`${this.gettAllEmployerURL}`+'?pageNo='+pageNo);  
  }
  getEmployerId(id: number): Observable<any> {
    return this.http.get(`${this.detailurl}/${id}`);
  }
}
