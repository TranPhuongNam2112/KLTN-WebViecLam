import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

let params= localStorage.getItem('resetPass_token');
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private resetpassUrl='http://localhost:8080/auth/resetpassword';
  constructor(private http: HttpClient) { }
  resetPassword(resetPasswordToken,resetPass: Object): Observable<Object> {
    return this.http.post(`${this.resetpassUrl}?token=${resetPasswordToken}`,resetPass,{responseType: 'text'});
  }

}
