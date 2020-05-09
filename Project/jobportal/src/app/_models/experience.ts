import { Candidate } from './candidate';

export class Experience {
    id: number;
    company_name: string;
    job_title: string;
    start_date: Date;
    end_date: Date;
    candidate: Candidate;
    description: string;

}