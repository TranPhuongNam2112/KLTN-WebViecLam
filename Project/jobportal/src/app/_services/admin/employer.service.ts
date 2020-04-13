import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private url = 'http://localhost:8080/api/admin/getAllEmployers';
  private detailurl='http://localhost:8080/api/admin/getEmployer';
  constructor(private http: HttpClient) { }
  getEmployers (pageNo: number)
  {
   return this.http.get(`${this.url}`+'?pageNo='+pageNo);  
  }
  getEmployerId(id: number): Observable<any> {
    return this.http.get(`${this.detailurl}/${id}`);
  }
}
