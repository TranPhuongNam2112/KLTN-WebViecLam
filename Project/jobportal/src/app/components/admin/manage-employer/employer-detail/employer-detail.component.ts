import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Employer} from '../../../../_models/employer';
import {EmployerService} from '../../../../_services/admin/employer.service';
@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.scss']
})
export class EmployerDetailComponent implements OnInit {
  id: number;
  employer: Employer;
  constructor(private route: ActivatedRoute,private router: Router,
    private employerService: EmployerService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    
    this.employerService.getEmployerId(this.id)
      .subscribe(data => {
        this.employer = data;
        console.log(data);    
      }, error => console.log(error));
  }
  employerList(){
    this.router.navigate(['admin/employer']);
  }
  

}
