import { Role } from './role';
import { Candidate } from './candidate';

export class User_Account {
    id: number;
    created_At: Date;
    updatedAt: Date;
    name: string;
    firstname:string;
    lastname: string;
    email: string;
    imageUrl: string;
    candidate: Candidate;
    roles: Role;
    enabled: boolean;
    emailVerified: boolean;
}