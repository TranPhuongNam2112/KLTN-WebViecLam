import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {JobLocation} from '../../../_models/jobLocation';
import {JobLocationService} from '../../../_services/admin/job-location.service';
@Component({
  selector: 'app-manage-joblocation',
  templateUrl: './manage-joblocation.component.html',
  styleUrls: ['./manage-joblocation.component.scss']
})
export class ManageJoblocationComponent implements OnInit {
  jobLocations: Observable<JobLocation[]>;
  public pageNo: number=0;
  public pages: Array<number>;
  constructor(private jobLocationService: JobLocationService, private router: Router) { }
  setPage(i, event:any){
    event.preventDefault();
    this.pageNo = i;
    this.getJobLocations();
  }
  ngOnInit(): void {
    this.getJobLocations();
  }
  getJobLocations(){
    this.jobLocationService.getJobLocations(this.pageNo).subscribe(
      data=> {
        console.log(data);
        this.jobLocations=data['content'];
        this.pages= new Array(data['totalPages'])
      },
      (error)=> {
        console.log(error.error.message)
      }
    );
  }

}
