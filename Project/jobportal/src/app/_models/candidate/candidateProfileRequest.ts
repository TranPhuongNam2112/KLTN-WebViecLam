export class CandidateProfileRequest {    
    name: string;
    doB: Date;
    gender: string;
    address: string;
    city_province: string;
    work_title: string;
    phonenumber: number;
    profile_visible: boolean;
    experiencedyears: number;
    jobtypes: string[];
    expectedsalary: number;
    industries: string[];
}