import { Component, OnInit } from '@angular/core';
import { Acctransaction } from '../acctransaction';

import { Router, ActivatedRoute } from '@angular/router';
import { PecuniabankService } from '../pecuniabank.service';

@Component({
  selector: 'app-viewbydate',
  templateUrl: './viewbydate.component.html',
  styleUrls: ['./viewbydate.component.css']
})
export class ViewbydateComponent implements OnInit {
  txn:Acctransaction[]=[];
  startDt:Date;
  endDt:Date;
  accountId:string;
  msg:String;

  constructor(private passbookService:PecuniabankService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() { }

    searchbydate(){
      this.passbookService.viewbydate(this.startDt, this.endDt,this.accountId).subscribe(data=>{this.txn=data,this.msg=undefined},
        error=>{console.log(error),this.msg=error.error.message;this.txn=null});

    }
  }



