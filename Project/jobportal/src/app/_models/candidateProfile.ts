import { Experience } from './experience';
import { Education } from './education';
import { JobType } from './jobType';

export class CandidateProfile {
    image: string;
    imageUrl: string;
    name: string;
    gender: string;
    doB: Date;
    jobtypes: JobType;
    phonenumber: string;
    work_title: string;
    address: string;
    experiences: Experience;
    educations: Education;
    cv_Uri: string;
    city_province: string;
    expectedsalary: number;
    cv_name:string;
    industries: string[];
}