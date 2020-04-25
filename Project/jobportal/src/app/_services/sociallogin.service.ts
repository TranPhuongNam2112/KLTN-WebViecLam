import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  url;
  constructor(private http: HttpClient) { }
  loginGoogleCandidate(responce) {
    this.url = 'http://localhost:8080/auth/loginGGForCandidate';
    return this.http.post(this.url, responce);
  }
 
  loginGoogleEmployer(responce) {
    this.url = 'http://localhost:8080/auth/loginGGForEmployer';
    return this.http.post(this.url, responce);
  }
  loginFacebookCandidate(responce) {
    this.url = 'http://localhost:8080/auth/loginFBForCandidate';
    return this.http.post(this.url, responce);
  }
 
  loginFacebookEmployer(responce) {
    this.url = 'http://localhost:8080/auth/loginFBForEmployer';
    return this.http.post(this.url, responce);
  }
}
