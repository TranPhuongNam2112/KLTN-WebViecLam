import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit {
  private url = 'http://localhost:8080/api/admin/getAllAccounts';
  constructor(private http: HttpClient) {
  }

  // getAllAccountList(): Observable<any> {
  //   return this.http.get(`${this.url}`);


  // }
  getAccounts (pageNo: number)
 {
  return this.http.get(`${this.url}`+'?pageNo='+pageNo);  
 }
  
  ngOnInit() {

  }

}
