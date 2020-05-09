import { Experience } from './experience';
import { Education } from './education';
import { JobType } from './jobType';

export class CandidateProfile {
     image: string;
    name: string;
    gender: string;
    doB: Date;
    jobtypes: JobType;
    phonenumber: string;
    work_title: string;
    address: string;
    experiences: Experience;
    educations: Education;
    CV_Uri: string;
}