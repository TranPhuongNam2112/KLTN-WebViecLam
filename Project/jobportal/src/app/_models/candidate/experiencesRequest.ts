
import { ExperienceRequest } from './experienceRequest';
export class ExperiencesRequest {
    experiences: [
        {
            companyname: string;
            jobtitle: string;
            startdate: Date;
            enddate: Date;
            description: string;
        }
    ]
}