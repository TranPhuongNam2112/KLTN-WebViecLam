import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JobType } from '../../../_models/jobType';
import { JobTypeService } from '../../../_services/admin/job-type.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';
// import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-manage-jobtype',
  templateUrl: './manage-jobtype.component.html',
  styleUrls: ['./manage-jobtype.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ManageJobtypeComponent implements OnInit {
  jobTypes: Observable<JobType[]>;
  constructor(private jobTypeService: JobTypeService, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal,
    public toastService: ToastService,
    private ngZone: NgZone 
    // private ref: ChangeDetectorRef
    ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.reloadData();
   
  }
  reloadData() {
    this.jobTypeService.getAllJobTypeList()
      .subscribe(
        data => { this.ngZone.run(() =>{
          this.jobTypes = data;
          console.log(data);
          //  this.ref.detectChanges();
        });
        },
        error => {
          console.log(error);
        });
  }
 
  open(content) {
    this.modalService.open(content);
  }
  deleteJobType(id: number,dangerTpl,successTpl) {
    this.jobTypeService.deleteJobType(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
        },
        error => {
          console.log(error);
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
        }
      );

  }
  createJobType() {
    this.router.navigate(['admin/createjobtype']);
  }
  updateJobType(id: number)
 {
  this.router.navigate(['admin/updatejobtype',id]);
 } 
}
