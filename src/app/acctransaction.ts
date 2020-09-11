
import { Account } from './account';

export class Acctransaction {

    transaccountId:number;
    transType:string;
    transAmount:string;
    transDescription:string;
    account:Account = new Account();
    transDate:string;
}
