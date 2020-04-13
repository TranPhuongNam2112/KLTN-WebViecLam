import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CandidateService} from './service/candidate.service';
import {Candidate} from '../../../_models/candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-candidate',
  templateUrl: './manage-candidate.component.html',
  styleUrls: ['./manage-candidate.component.scss']
})
export class ManageCandidateComponent implements OnInit {
  public candidates: Observable<Candidate[]> ;
  public pageNo: number=0;
  public pages: Array<number>;
  constructor(private candidateService: CandidateService, private router: Router) { }
  setPage(i, event:any){
    event.preventDefault();
    this.pageNo = i;
    this.getCandidates();
  }
  ngOnInit(): void {
    this.getCandidates();
     
  }
  getCandidates(){
    this.candidateService.getCandidates(this.pageNo).
    subscribe(
      data=> {
        console.log(data);
        this.candidates=data['content'];
        this.pages= new Array(data['totalPages']);
      
      },
      (error)=> {
        console.log(error.error.message)
      }
    );
  }
  candidateDetails(id:number){
    this.router.navigate(['admin/candidate-detail', id]);
  }

}
