import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerHistoryService {
  private getEmployerHistoryURL='http://localhost:8080/employer/history';
  constructor(private http: HttpClient) { }
  getEmployerHistory( ): Observable<any> {
    return this.http.get(`${this.getEmployerHistoryURL}`);
  }
}
