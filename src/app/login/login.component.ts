import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from '../storage.service'
import { PecuniabankService } from '../pecuniabank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  msg:string;

  constructor(private router:Router, private storageservice:StorageService, private passbookService:PecuniabankService) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.passbookService.doLogin(this.uname , this.pwd).subscribe(data=>{
      this.storageservice.setItem("tokenId", data);
      this.msg=undefined;
      this.router.navigateByUrl("/");
    },error=>{console.log(error),this.msg=JSON.parse(error.error).message});
  }

}
