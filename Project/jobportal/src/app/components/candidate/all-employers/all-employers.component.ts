import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AllEmployersService } from 'src/app/_services/candidate/all-employers.service';
import { EmployerSummary } from 'src/app/_models/candidate/employerSummary';
//count stat
import { CandidateStats } from 'src/app/_models/candidate/candidateStats';
import { CandidateStatService } from 'src/app/_services/candidate/candidate-stat.service';
//count stat
@Component({
  selector: 'app-all-employers',
  templateUrl: './all-employers.component.html',
  styleUrls: ['./all-employers.component.scss']
})
export class AllEmployersComponent implements OnInit {
  allEmployers: Observable<EmployerSummary[]>;
  public pageNo: number = 1;
  public pages: Array<number>;
  //my stat
  myStats: CandidateStats;
  //mystat
  constructor(
    private router: Router,
    private allEmployersService: AllEmployersService,
    private candidateStatService: CandidateStatService
  ) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getAllEmployers();
  }

  ngOnInit(): void {
    this.getAllEmployers();
    this.getCandidateStats();
  }
  pagesArray(): Array<number | string> {
    if (this.pages.length < 5) return Array.from(Array(this.pages), (_, x) => (x + 1))
    const rawArray = [- 2, -1, 0, 1, 2].map(position => this.pageNo + position);
    const middlePartArray = rawArray.filter(position => (position > 1 && position < this.pages.length - 1));
    return [
      1,
      ...middlePartArray[0] > 2 ? ['...'] : [],
      ...middlePartArray,
      ...middlePartArray.slice(-1)[0] < this.pages.length - 2 ? ['...'] : [],
      this.pages.length - 1,
    ]
  }
  //my stat
  getCandidateStats() {
    this.candidateStatService.getCandidateStats()
      .subscribe(data => {
        console.log("my stats");
        console.log("my stats" + data);
        this.myStats = data;
      }, error => console.log(error));

  }
  //my stat
  getAllEmployers() {
    this.allEmployersService.getAllEmployers(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.allEmployers = data['content'];
        this.pages = new Array(data['totalPages']);
        this.router.navigate(['/candidate/all-employers'], { queryParams: { page: this.pageNo } });
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  // viewJobs(companyname){
  //   this.router.navigate(['/candidate/all-employers'], { queryParams:  { name:  companyname } });
  // }
  jobPostByCompany(id: number) {
    this.router.navigate(['candidate/companies', id]);
  }


}
