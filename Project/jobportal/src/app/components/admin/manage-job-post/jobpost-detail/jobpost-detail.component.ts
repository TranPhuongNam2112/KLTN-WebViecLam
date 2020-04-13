import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {JobPostService} from '../../../../_services/admin/job-post.service';
import {JobPost } from '../../../../_models/jobPost';
import { JobLocation } from 'src/app/_models/jobLocation';
@Component({
  selector: 'app-jobpost-detail',
  templateUrl: './jobpost-detail.component.html',
  styleUrls: ['./jobpost-detail.component.scss']
})
export class JobpostDetailComponent implements OnInit {
  id: number;
  jobPost: JobLocation;
  constructor(private route: ActivatedRoute,private router: Router,
    private jobPostService: JobPostService) { }

  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['id'];
    
    this.jobPostService.getJobPostId(this.id)
      .subscribe(data => {
        this.jobPost = data;
        console.log(data);    
      }, error => console.log(error));
  }
  jobpostList(){
    this.router.navigate(['admin/jobpost']);
  }
}
