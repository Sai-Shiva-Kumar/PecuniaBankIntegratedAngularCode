import { Component, OnInit } from '@angular/core';
import { Loanreqform } from '../loanreqform';
import { Customer } from '../customer';
import { PecuniabankService } from '../pecuniabank.service';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {

  loanreqform:Loanreqform=new Loanreqform();
  customer:Customer[]=[];
  msg:string;
  errorMsg:string;
  userName=this.loanservice.userName;
    constructor(private loanservice:PecuniabankService) { }
  
    ngOnInit(): void {
    }
    applyLoan(){
      this.loanservice.applyLoan(this.loanreqform).subscribe(data=>{console.log(data);
      this.msg="loan is successfully requested and your ID is " + JSON.parse(data).message;this.errorMsg=undefined;
      }, error=>{ console.log(error);this.errorMsg=error.error.message; this.msg=undefined});
    }
  
  }
