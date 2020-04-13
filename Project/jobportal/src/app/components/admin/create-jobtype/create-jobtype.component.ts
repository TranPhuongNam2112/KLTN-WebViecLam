import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobType } from '../../../_models/jobType';
import { JobTypeService } from '../../../_services/admin/job-type.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';

@Component({
  selector: 'app-create-jobtype',
  templateUrl: './create-jobtype.component.html',
  styleUrls: ['./create-jobtype.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CreateJobtypeComponent implements OnInit {
  jobType: JobType = new JobType();
  submitted = false;
  constructor(private jobTypeService: JobTypeService,
    private router: Router,
    config: NgbModalConfig, private modalService: NgbModal,
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
  
  }
 
  newJobType(): void {
    this.submitted = false;
    this.jobType = new JobType();
  }
  save(dangerTpl, successTpl) {
    this.jobTypeService.createJobType(this.jobType)
      .subscribe(data => {
        console.log(data);
        this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
      }, error => { 
        console.log(error) ;
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
      });
    this.jobType = new JobType();
   this.gotoList();
   
  }
  onSubmit(dangerTpl, successTpl) {
    this.submitted = true;
    this.save(dangerTpl, successTpl);
  }

  gotoList() {
    this.router.navigate(['admin/jobtype']);
    
  }


}

