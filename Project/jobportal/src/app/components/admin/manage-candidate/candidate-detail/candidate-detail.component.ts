import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CandidateService} from '../service/candidate.service';
import {Candidate} from '../../../../_models/candidate';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  active = 1;
  id: number;
  candidate: Candidate;
  constructor(private route: ActivatedRoute,private router: Router,
    private candidateService: CandidateService) { }

  ngOnInit(): void {
    //this.candidate = new Candidate();

    this.id = this.route.snapshot.params['id'];
    
    this.candidateService.getCandidatebyId(this.id)
      .subscribe(data => {
        this.candidate = data;
        console.log(data);    
      }, error => console.log(error));
  }
  candidateList(){
    this.router.navigate(['admin/candidate']);
  }
}
