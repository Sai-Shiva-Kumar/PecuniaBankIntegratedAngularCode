import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Acctransaction } from '../acctransaction';
import { Account } from '../account';
import { PecuniabankService } from '../pecuniabank.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  accountId:string;
  acctxn:Acctransaction[]=[];
  msg:string;
  acc:Account;
  constructor(private passbookService:PecuniabankService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit()  { 
    
  }

    searchById(){
      this.passbookService.viewbyID(this.accountId).subscribe(data=>{
        this.acctxn=data,this.msg=undefined}, error=>{console.log(error); this.msg=error.error.message;this.acctxn=null}
      ) 
  };
    

     

 
}
