import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ManagejobService} from 'src/app/_services/employer/managejob.service';
import {JobPost } from 'src/app/_models/jobPost';
import { JobType } from '../../../_models/jobType';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';
@Component({
  selector: 'app-jobpost-detail',
  templateUrl: './jobpost-detail.component.html',
  styleUrls: ['./jobpost-detail.component.scss']
})
export class JobpostDetailComponent implements OnInit {
  id: number;
  jobPost: JobPost;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private managejobService: ManagejobService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.managejobService.getJobPostDetail(this.id)
      .subscribe(data => {
        this.jobPost = data;
        console.log(data);    
      }, error => console.log(error));
  }
  jobpostList(){
    this.router.navigate(['employer/managejob']);
  }

}
