import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManageProfileService {
  private getProfileURL = 'http://localhost:8080/employer/profile';
  private updateProfileURL ='http://localhost:8080/employer/profile';
  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get(`${this.getProfileURL}`);
  }

  updateProfile(value: any): Observable<Object> {
    return this.http.put(`${this.updateProfileURL}`, value, { responseType: 'text' });
  }
}
