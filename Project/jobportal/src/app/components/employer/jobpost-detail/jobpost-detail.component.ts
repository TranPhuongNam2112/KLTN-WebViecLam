import { Component, OnInit, Injectable} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagejobService } from 'src/app/_services/employer/managejob.service';
import { JobPostRequest } from 'src/app/_models/jobPostRequest';
import { JobType } from '../../../_models/jobType';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';
//industry
import { AllIndustries } from 'src/app/_models/candidate/allIndustries';
import { CrawledJoblistService } from 'src/app/_services/candidate/crawled-joblist.service';
import { Options } from 'select2';
import { Select2OptionData } from 'select2';
//detail jobpost
import { JobPost } from 'src/app/_models/employer/jobPost';
//jobtype
import { AllJobTypes } from 'src/app/_models/candidate/allJobTypes';
import { UserAccountService } from '../../../_services/candidate/user-account.service';
import { NgSelectConfig } from '@ng-select/ng-select';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        year : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        day : parseInt(date[2], 10),
       
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    // return date ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day  : null;
    return date?date.year+ this.DELIMITER + ('0'+date.month).slice(-2)
    + this.DELIMITER+('0'+date.day).slice(-2):null
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
   
        year : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        day : parseInt(date[2], 10),
       
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date?date.year+ this.DELIMITER + ('0'+date.month).slice(-2)
    + this.DELIMITER+('0'+date.day).slice(-2):null
  }
}

@Component({
  selector: 'app-jobpost-detail',
  templateUrl: './jobpost-detail.component.html',
  styleUrls: ['./jobpost-detail.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class JobpostDetailComponent implements OnInit {
  expiredDate: NgbDateStruct;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  id: number;
  jobPostRequest: JobPostRequest;
  jobPost: JobPost;
  //industry
  industries: AllIndustries;
  jobTypes: AllJobTypes;
  //ng select
  //fix get jobpost detail của Nam
  // jobtitle = '';
  // requiredexperience : number;
  // jobdescription = '';
  // minSalary : number;
  // maxSalary: number;
  // expiredDate: Date;
  // street_address = '';
  // city_province = '';
  //fix
  public options: Options;
  public exampleData: Array<Select2OptionData>;
  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private route: ActivatedRoute,
    private router: Router,
    private managejobService: ManagejobService,
    //industry
    private crawledJoblistService: CrawledJoblistService,
    //industry
    //jobtype
    private userAccountService: UserAccountService,
    private config: NgSelectConfig,
    public toastService: ToastService,
  ) {
    //jobtype
    this.config.notFoundText = 'Jobtypes not found';
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 7);
  }

  ngOnInit(): void {
    console.log("fromDate");
    console.log(this.toDate);
    this.jobPostRequest = new JobPostRequest();
    this.jobPost = new JobPost();
    this.id = this.route.snapshot.params['id'];
    this.getJobPostDetail();
    //industry
    this.industries = new AllIndustries();
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '600',

    };
    this.getAllIndustries();
    //industry
    //jobtype
    this.jobTypes = new AllJobTypes();
    this.getAllJobTypes();
  }
  getAllJobTypes() {
    this.userAccountService.getJobTypes()
      .subscribe(data => {
        console.log(data)
        this.jobTypes = data;
      }, error => console.log(error));
  }
  jobpostList() {
    this.router.navigate(['employer/managejob']);
  }
  getAllIndustries() {
    this.crawledJoblistService.getAllIndustries()
      .subscribe(data => {
        console.log("industries");
        console.log(data);
        this.industries = data;
      }, error => console.log(error));
  }
  getJobPostDetail() {
    this.id = this.route.snapshot.params['id'];
    console.log("id jobpost detail");
    console.log(this.id);
    this.managejobService.getJobPostDetail(this.id)
      .subscribe(data => {
        console.log("job post detail data");
        this.jobPost = data;
        this.jobPostRequest = data;
        //fix của Nam
        this.jobPostRequest.jobtitle = this.jobPost.job_title;
        this.jobPostRequest.requiredexperience = this.jobPost.requiredexpreienceyears;
        this.jobPostRequest.jobdescription = this.jobPost.job_description;
        this.jobPostRequest.minSalary = this.jobPost.min_salary;
        this.jobPostRequest.maxSalary = this.jobPost.max_salary;
        this.jobPostRequest.expiredDate = this.jobPost.expirationDate;
        this.jobPostRequest.street_address = this.jobPost.joblocation.street_address;
        this.jobPostRequest.city_province = this.jobPost.joblocation.city_province;
        //fix của Nam
        console.log(data);
      }, error => console.log(error));
  }
  updateJobPost(dangerTpl, successTpl) {

    this.managejobService.updateJobPost(this.id, this.jobPostRequest)
      .subscribe(data => {
        console.log(data);
        this.getJobPostDetail();
        this.jobpostList();
        this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
      }, error => {
        console.log(error);
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
      });
  }
}
