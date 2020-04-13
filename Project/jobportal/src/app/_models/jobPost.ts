import { Employer } from './employer';
import { JobType } from './jobType';
import { JobLocation } from './jobLocation';

export class JobPost {
    id: number;
    employer: Employer;
    jobtype: JobType;
    industry: string;
    created_date: Date;
    job_description: string;
    joblocation: JobLocation;
    expired_date: Date;
    salary: number;
}