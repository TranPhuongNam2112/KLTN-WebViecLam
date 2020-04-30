import { Candidate } from './candidate';

export class Education {
    id: number;
    university_college: string;
    major: string;
    start_date: Date;
    completion_date: Date;
    gpa: number;
    candidate: Candidate;


}