import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ManagejobService } from 'src/app/_services/employer/managejob.service';
import { MyJobPostSummary} from 'src/app/_models/employer/myJobPostSummary';
import { ToastService } from '../../../_services/toast-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-managejob',
  templateUrl: './managejob.component.html',
  styleUrls: ['./managejob.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ManagejobComponent implements OnInit {

  myJobPosts: Observable<MyJobPostSummary[]>;
  public pageNo: number = 0;
  public pages: Array<number>;

  constructor(
    private managejobService: ManagejobService, 
    private router: Router,
    config: NgbModalConfig, private modalService: NgbModal,
    public toastService: ToastService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;    
  }
  open(content) {
    this.modalService.open(content);
  }
  setPage(i, event: any) {
    event.preventDefault();
    this.pageNo = i;
    this.getJobPosts();
  }
  ngOnInit(): void {
    this.getJobPosts();
  }
  getJobPosts() {
    this.managejobService.getJobPosts(this.pageNo).subscribe(
      data => {
        console.log(data);
        this.myJobPosts = data['content'];
        this.pages = new Array(data['totalPages'])
      },
      (error) => {
        console.log(error.error.message)
      }
    );
  }
  getJobPostDetail(id: number) {
    this.router.navigate(['employer/jobpost-detail', id]);
  }
  
  deleteJobPost(id: number,dangerTpl,successTpl) {
    this.managejobService.deleteJobPost(id)
      .subscribe(
        data => {
          console.log(data);
          this.getJobPosts();
          // this.toastService.show('Congratulation! You have done successfully!', { classname: 'bg-success text-light', delay: 3000 });
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        },
        error => {
          console.log(error);
          // this.toastService.show('Oh No! You have got some error!', { classname: 'bg-danger text-light', delay: 3000 });
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      );

  }
 

}
