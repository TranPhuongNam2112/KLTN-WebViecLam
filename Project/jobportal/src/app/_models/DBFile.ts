import { Candidate } from './candidate';
import { User_Account } from './user_account';

export class DBFile {
    id: string;
    fileName: string;
    fileType: string;
    data: number;
    candidate: Candidate;
    user: User_Account;

}