import { Industries } from './industries';
import { JobLocation } from '../jobLocation';
import { JobType } from '../jobType';

export class JobPost {
    createdAt: Date;
    updatedAt: Date;
    id: number;
    job_title: string;
    industries: Industries;
    job_description: string;
    joblocation: JobLocation;
    requiredexperienceyears: number;
    expirationDate: Date;
    min_salary: number;
    max_salary: number;
    sourceUrl: string;
    sourceWebsite: string;
    requiredexpreienceyears: number;
    jobtype: JobType;    
}