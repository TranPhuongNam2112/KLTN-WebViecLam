import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManageUserService {
  private url = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) { }
  getUsers (pageNo: number)
  {
   return this.http.get(`${this.url}`+'?pageNo='+pageNo);  
  }
}
