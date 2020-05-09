import { User_Account } from './user_account';

export class Employer {
    id: number;
    companyname: string;
    description: string;
    establishmentdate: Date;
    websiteurl: string;
    userAccount: User_Account;
    user: User_Account;
    main_address: string;
    phone_number: string;  
    industry: string;
}