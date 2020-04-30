import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private url = 'http://localhost:8080/candidate/me';
  constructor(private http: HttpClient) { }
 
  getAccounts(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
