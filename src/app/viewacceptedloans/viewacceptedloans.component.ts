import { Component, OnInit } from '@angular/core';
import { Loanrequest } from '../loanrequest';

import { PecuniabankService } from '../pecuniabank.service';

@Component({
  selector: 'app-viewacceptedloans',
  templateUrl: './viewacceptedloans.component.html',
  styleUrls: ['./viewacceptedloans.component.css']
})
export class ViewacceptedloansComponent implements OnInit {
  loanrequests: Loanrequest[]=[];
  msg:string;
  userName=this.loanService.userName;
  searchstr:string="";
  constructor(private loanService:PecuniabankService) { }

  ngOnInit(): void {
    this.loanService.viewAcceptedLoans().subscribe(data=>{this.loanrequests=data,this.msg=undefined},
    error=>this.msg=error.error.message);
  }

}
