import { Employer } from './employer';
import { JobType } from './jobType';
import { JobLocation } from './jobLocation';
import { SaveJobPost } from './saveJobPost';

export class JobPostRequest {
    jobtitle: string;
    jobType: string;
    requiredexperience: number;
    jobdescription: string;
    industry: string[];
    minSalary: number;
    maxSalary: number;
    expiredDate: Date;
    street_address: string;
    city_province: string;
}