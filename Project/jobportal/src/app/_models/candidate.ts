import { User_Account } from './user-account';

export class Candidate {
    id: number;
    phone_number: string;
    homeaddress: string;
    gender: string;
    doB: Date;
    cV: string;
    image: string;
    userAccount: User_Account;
}