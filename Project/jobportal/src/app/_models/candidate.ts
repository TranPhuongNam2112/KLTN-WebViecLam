import { User_Account } from './user_account';
import { SaveJobPost } from './saveJobPost';
import { Education } from './education';
import { Experience } from './experience';
import { DBFile } from './DBFile';

export class Candidate {
    id: number;
    phone_number: string;
    homeaddress: string;
    gender: string;
    doB: Date;
    user: User_Account;
    savedJobPosts: SaveJobPost;
    educations: Education;
    experiences: Experience;
    files: DBFile;
    cV: string;
    image: string;
    userAccount: User_Account;

}