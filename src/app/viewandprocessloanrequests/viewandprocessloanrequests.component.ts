import { Component, OnInit } from '@angular/core';
import { Loanrequest } from '../loanrequest';
import { PecuniabankService } from '../pecuniabank.service';

@Component({
  selector: 'app-viewandprocessloanrequests',
  templateUrl: './viewandprocessloanrequests.component.html',
  styleUrls: ['./viewandprocessloanrequests.component.css']
})
export class ViewandprocessloanrequestsComponent implements OnInit {
  loanrequests: Loanrequest[]=[];
  msg:string;
  userName=this.loanService.userName;
  constructor(private loanService:PecuniabankService) { }

  ngOnInit(): void {
    this.loanService.viewAllPendingLoanRequests().subscribe(data=>{console.log(data);this.loanrequests=data},
    error=>{console.log(error);this.msg=error.error.message});
  }

  processLoan(loanRequest:Loanrequest){
    this.loanService.processLoan(loanRequest.loanRequestId).subscribe(data=>{this.msg=data.message + "for ID "+loanRequest.loanRequestId; 
    console.log(data);
    this.loanrequests=this.loanrequests.filter(loan=>loan.loanRequestId!=loanRequest.loanRequestId );
    console.log(this.loanrequests);

  },
    error=>{console.log(error);this.msg=error.error.message;
      this.loanrequests=this.loanrequests.filter(loan=>loan.loanRequestId!=loanRequest.loanRequestId );
    }


    );
  

  }
}

