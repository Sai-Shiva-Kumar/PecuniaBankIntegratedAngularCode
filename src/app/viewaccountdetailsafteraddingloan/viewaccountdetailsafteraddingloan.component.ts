import { Component, OnInit } from '@angular/core';
import { PecuniabankService } from '../pecuniabank.service';
import { Account } from '../account';

@Component({
  selector: 'app-viewaccountdetailsafteraddingloan',
  templateUrl: './viewaccountdetailsafteraddingloan.component.html',
  styleUrls: ['./viewaccountdetailsafteraddingloan.component.css']
})
export class ViewaccountdetailsafteraddingloanComponent implements OnInit {

  accounts:Account[]=[];
  msg:string;
  userName=this.loanService.userName;
  searchstrcustid:string="";
  constructor(private loanService:PecuniabankService) { }

  ngOnInit(): void {
    this.loanService.viewAccounts().subscribe(data=>{this.accounts=data,this.msg=undefined},
    error=>this.msg=error.error.message);
  }
}