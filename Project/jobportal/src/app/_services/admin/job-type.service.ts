import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobTypeService  {
  private url = 'http://localhost:8080/api/admin/getAllJobTypes';
  private deleteurl='http://localhost:8080/api/admin/deleteJobType';
  private createurl='http://localhost:8080/api/admin/createJobType';
  private updateurl='http://localhost:8080/api/admin/updateJobType';
  private getbyIdurl='http://localhost:8080/api/admin/getJobType';
  constructor(private http: HttpClient) { }
  getAllJobTypeList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  deleteJobType(id: number): Observable<any> {
    return this.http.delete(`${this.deleteurl}/${id}`, { responseType: 'text' });
  }
  createJobType(jobType: Object): Observable<Object> {
    return this.http.post(`${this.createurl}`, jobType);
  }
  updateJobType(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateurl}/${id}`, value);
  }
  getJobTypeId(id: number): Observable<any> {
    return this.http.get(`${this.getbyIdurl}/${id}`);
  }
 
}
