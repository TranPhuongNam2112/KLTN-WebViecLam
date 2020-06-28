import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ActivatedRoute,Router } from '@angular/router';
import { JobPostSummary } from 'src/app/_models/jobPostSummary';
import {EmployerProfile} from 'src/app/_models/candidate/employerProfile';
import {EmployerJobpostService} from 'src/app/_services/candidate/employer-jobpost.service';
//get all employer
import {AllEmployersService} from 'src/app/_services/candidate/all-employers.service';
import {EmployerSummary} from 'src/app/_models/candidate/employerSummary';
import { JobDetailService } from 'src/app/_services/candidate/job-detail.service';
import { JobPostDetails } from 'src/app/_models/candidate/jobPostDetails';
//get all employer
@Component({
  selector: 'app-company-jobpost',
  templateUrl: './company-jobpost.component.html',
  styleUrls: ['./company-jobpost.component.scss']
})
export class CompanyJobpostComponent implements OnInit {
  id: number;
  companyJobPost: Observable<JobPostSummary[]>;
  companyDetails: EmployerProfile;
   //get all employer
   allEmployers: Observable<EmployerSummary[]>;
   //get all employer
  public pageNo: number = 0;
  public pages: Array<number>;
  jobDetail: JobPostDetails;
  constructor(
    private employerJobpostService:EmployerJobpostService,
    private route: ActivatedRoute,
    private router: Router,
    private allEmployersService:AllEmployersService,
    private jobDetailService: JobDetailService,
    ) { }
    setPage(i, event: any) {
      event.preventDefault();
      this.pageNo = i;
      this.getJobPostByEmployer();
    }
  ngOnInit(): void {
    this.getJobPostByEmployer();
    this.getEmployerbyId();
    this.getAllEmployers();
    this.companyDetails = new EmployerProfile();
  }
  getAllEmployers() {
    this.allEmployersService.getAllEmployers(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.allEmployers = data['content'];
     
      
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  getEmployerbyId(){
    this.id = this.route.snapshot.params['id'];
    this.employerJobpostService.getEmployerbyId(this.id)
      .subscribe(data => {
        this.companyDetails = data;
        console.log("Company detail");
        console.log(data);
      }, error => console.log(error));
  }
  getJobPostByEmployer() {
    this.id = this.route.snapshot.params['id'];
    this.employerJobpostService. getJobPostByEmployer(this.id,this.pageNo)
      .subscribe(
        data => {
          console.log("job post");
          console.log(data);
          this.companyJobPost = data['content'];
          this.pages = new Array(data['totalPages'])
          this.router.navigate(['candidate/companies', this.id], { queryParams:  {  page: this.pageNo +1 } });
        },
        error => {
          console.log(error);
        });
  }
 
  showlistemployer(id: number) {
    let url = this.router.createUrlTree(['candidate/companies', id],{ queryParams:  {  page: this.pageNo +1 } });
    window.open(url.toString(), '_blank');
  }
  jobPostDetail(id: number) {
    this.router.navigate(['candidate/jobpost-detail', id]);
  }
  getJobDetail(id:number) {
   
    this.jobDetailService.getJobPostDetail(id)
      .subscribe(data => {
        this.jobDetail = data;
        console.log(data);
      }, error => console.log(error));
  }
  jobPostDetailURL(id: number) {
    this.getJobDetail(id);
    console.log("ma buon ngu qua");
  }
}
