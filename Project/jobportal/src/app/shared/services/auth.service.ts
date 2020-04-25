import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class _AuthService {

  constructor(private http: HttpClient) { }
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
  // register(user): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     firstname: user.firstname,
  //     lastname: user.lastname,
  //     email: user.email,
  //     password: user.password,
  //     role: [user.role]
  //   }, httpOptions);
  // }
  registerCandidate(user): Observable<any> {
    return this.http.post(AUTH_API + 'signupforcandidate', {
      name: user.name,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  registerEmployer(user): Observable<any> {
    return this.http.post(AUTH_API + 'signupforemployer', {
      name: user.name,
      email: user.email,
      password: user.password,
      companyname: user.companyname,
      industry: user.industry,
      phonenumber: user.phonenumber
    }, httpOptions);
  }
}
