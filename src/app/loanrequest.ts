import { Customer } from './customer';

export class Loanrequest {
    loanRequestId:string;
    loanAmount:string;
    loanType:string;
    loanTenure:number;
    reqStatus:string;
    dateOfRequest:string;
    annualIncome:string;
    customer:Customer= new Customer()
}
