import { Pipe, PipeTransform } from '@angular/core';
import {Account} from './account';

@Pipe({
  name: 'searchbycustid'
})
export class SearchbycustidPipe implements PipeTransform {

  transform(accounts: Account[],searchstrcustid:string): any {
    return accounts.filter(accounts=>accounts.customer.customerId.toLowerCase().includes(searchstrcustid.toLowerCase()));
  }

}
