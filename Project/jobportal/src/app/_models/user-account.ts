import { Role } from './role';

export class User_Account {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    roles: Role;
    enabled: boolean;
}