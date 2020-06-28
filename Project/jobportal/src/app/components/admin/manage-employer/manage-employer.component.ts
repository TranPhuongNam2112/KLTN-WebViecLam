import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {EmployerService} from '../../../_services/admin/employer.service';
import {Employer} from '../../../_models/employer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-employer',
  templateUrl: './manage-employer.component.html',
  styleUrls: ['./manage-employer.component.scss']
})
export class ManageEmployerComponent implements OnInit {
  employers: Observable<Employer[]>;
  public pageNo: number=0;
  public pages: Array<number>;
  constructor(private employerService: EmployerService, private router: Router) { }
  setPage(i, event:any){
    event.preventDefault();
    this.pageNo = i;
    this.getAllEmployers();
  }
  ngOnInit(): void {
    this.getAllEmployers();
  }
  getAllEmployers() {
    this.employerService.gettAllEmployer(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.employers = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  employerDetail(id:number){
    this.router.navigate(['admin/employer-detail', id]);
  }
}
