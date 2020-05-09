import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForgorPasswordService {
  private forgotpassUrl='http://localhost:8080/auth/forgotpassword';
  constructor(private http: HttpClient) { }
  forgotPassword(email: Object): Observable<Object> {
    return this.http.post(`${this.forgotpassUrl}`, email, {responseType: 'text'});
  }
}
