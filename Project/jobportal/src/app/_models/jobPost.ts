import { Employer } from './employer';
import { JobType } from './jobType';
import { JobLocation } from './jobLocation';
import { SaveJobPost } from './saveJobPost';

export class JobPost {
    job_title: string;
    jobtype: JobType;
    industries: string;
    job_description: string;
    requiredexperienceyears: number;
    expirationDate: Date;
    min_salary: number;
    max_salary: number;
    sourceUrl: string;
    sourceWebsite: string;
    requiredexperience: number;
    jobdescription: string;
    industry: string[];
    minSalary: number;
    maxSalary: number;
    expiredDate: Date;
    street_address: string;
    city_province: string;
    salary: number;
    expired_date: Date;
    created_date: Date;
    id: number;
}