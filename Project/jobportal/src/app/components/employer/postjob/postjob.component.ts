import { Component, OnInit , Injectable} from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ManagejobService } from 'src/app/_services/employer/managejob.service';
import { JobPostRequest } from 'src/app/_models/jobPostRequest';
import { ToastService } from '../../../_services/toast-service.service';
import { Router } from '@angular/router';
//industry
import { AllIndustries } from 'src/app/_models/candidate/allIndustries';
import { CrawledJoblistService } from 'src/app/_services/candidate/crawled-joblist.service';
import { Options } from 'select2';
import { Select2OptionData } from 'select2';
import {AllJobTypes} from 'src/app/_models/candidate/allJobTypes';
import { UserAccountService } from '../../../_services/candidate/user-account.service';
import { NgSelectConfig } from '@ng-select/ng-select';
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
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class PostjobComponent implements OnInit {
  expiredDate: NgbDateStruct;
  model: NgbDateStruct;
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  jobPost: JobPostRequest;
  responseMessage = '';
  submitted = false;
  isSuccessful: boolean;
   //ng select
   jobTypes: AllJobTypes;
  
  //industry
  industries: AllIndustries;
  //ng select
 
  public options: Options;
  public exampleData: Array<Select2OptionData>;
  constructor(
    private router: Router,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private managejobService: ManagejobService,
    public toastService: ToastService,
    //industry
    private crawledJoblistService: CrawledJoblistService,
    //industry
    private userAccountService: UserAccountService,
    private config: NgSelectConfig,
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 7);
    //ng select
    this.config.notFoundText = 'Jobtypes not found';
      
  }

  ngOnInit(): void {
    this.jobPost = new JobPostRequest();
    //industry
    this.industries = new AllIndustries();
    this.jobTypes= new AllJobTypes();
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '700'
    };
    this.getAllIndustries();
    this.getAllJobTypes();
    //industry
  }
  getAllJobTypes(){
    this.userAccountService.getJobTypes()
    .subscribe(data => {
      console.log(data)
      this.jobTypes = data;
    }, error => console.log(error));
  }
  getAllIndustries() {
    this.crawledJoblistService.getAllIndustries()
      .subscribe(data => {
        console.log("industries");
        console.log(data);
        this.industries = data;
      }, error => console.log(error));
  }
  backjobpostList() {
    this.router.navigate(['employer/managejob']);
  }
  //add education
  createJobPost(dangerTpl, successTpl) {
    this.managejobService.createJobPost(this.jobPost)
      .subscribe(data => {
        this.responseMessage = data.toString();
        console.log(data);
        this.submitted = true;
        this.isSuccessful = true;
        this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
        console.log(this.isSuccessful);
        this.backjobpostList();
      }, error => {
        console.log(error);
        this.isSuccessful = false;
        this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
      });
    //this.experien = new ExperiencesRequest(); 
  }
  //ad education
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}
