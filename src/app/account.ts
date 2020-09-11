import { Customer } from './customer';

export class Account {
    accountId:string;
    accountName:string;
    accountStatus:string;
    accountBalance:string;
    createdDt:string;
    lastUpdated:string;
    customer:Customer=new Customer()
}

