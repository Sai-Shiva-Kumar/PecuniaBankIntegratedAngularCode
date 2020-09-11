import { Pipe, PipeTransform } from '@angular/core';
import { Loanrequest } from './loanrequest';


@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {

  transform(loanrequests: Loanrequest[],searchstr:string ): any {
    return loanrequests.filter(loanrequests=>loanrequests.customer.customerId.toLowerCase().includes(searchstr.toLowerCase()));
  }

}
