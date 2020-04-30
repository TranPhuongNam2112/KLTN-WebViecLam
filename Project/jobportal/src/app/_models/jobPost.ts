import { Employer } from './employer';
import { JobType } from './jobType';
import { JobLocation } from './jobLocation';
import { SaveJobPost } from './saveJobPost';

export class JobPost {
    id: number;
    job_title: string;
    employer: Employer;
    jobtype: JobType;
    industry: string;
    created_date: Date;
    job_description: string;
    joblocation: JobLocation;
    savedjobpost: SaveJobPost;
    expired_date: Date;
    min_salary: number;
    max_salary: number;
    expirationDateTime: Date;
    salary: number;
}