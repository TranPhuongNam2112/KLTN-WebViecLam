import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'text' });
  }

  getCandidateBoard(): Observable<any> {
    return this.http.get(API_URL + 'candidate', { responseType: 'text' });
  }

  getEmployerBoard(): Observable<any> {
    return this.http.get(API_URL + 'employer', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}