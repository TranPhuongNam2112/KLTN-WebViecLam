import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobType } from '../../../_models/jobType';
import { JobTypeService } from '../../../_services/admin/job-type.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';

@Component({
  selector: 'app-update-jobtype',
  templateUrl: './update-jobtype.component.html',
  styleUrls: ['./update-jobtype.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateJobtypeComponent implements OnInit {
  id: number;
  jobType: JobType;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal,
    public toastService: ToastService,
    private jobTypeService: JobTypeService) { }

  ngOnInit(): void {
     this.jobType = new JobType();

     this.id = this.route.snapshot.params['id'];

    this.jobTypeService.getJobTypeId(this.id)
      .subscribe(data => {
        console.log(data)
        this.jobType = data;
        
      }, error => console.log(error));
  }
  update(dangerTpl, successTpl) {
    this.jobTypeService.updateJobType(this.jobType.id,this.jobType)
      .subscribe(data => {
        console.log(data);
        this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
      }, error => { 
        console.log(error) ;
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
      });
  
   this.gotoList();
   
  }
  onSubmit(dangerTpl, successTpl) {
    this.submitted = true;
    this.update(dangerTpl, successTpl);
  }
  gotoList() {
    this.router.navigate(['admin/jobtype']);
  }
}
