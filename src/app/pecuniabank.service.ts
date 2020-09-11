import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { TransferfundForm } from './transferfund-form';
import {AccountForm} from './account-form';
import {CustomerForm} from './customer-form';
import {Loanreqform} from './loanreqform';

@Injectable({
  providedIn: 'root'
})
export class PecuniabankService {
  userName:string;
  constructor(private http: HttpClient) { }
  public applyLoan(loanreqform:Loanreqform):Observable<any>{
   return this.http.post("http://localhost:8040/cgbank/loanrequest", loanreqform, {responseType: 'text'});
    }
  
  
    public addAccount(accountform:AccountForm):Observable<any>{
      return this.http.post("http://localhost:8038/cgbank/addaccount",accountform, {responseType: 'text'});
    }
    public addCustomer(customerform:CustomerForm):Observable<any>{
      console.log(customerform);
      return this.http.post("http://localhost:8038/cgbank/addcustomer",customerform,{responseType:'text'});
    }
  
    public viewAllPendingLoanRequests():Observable<any>{
      
      let utoken = localStorage.getItem("tokenId");
      if(utoken == null) utoken="";
      const httpHeaders = new HttpHeaders({"tokenId": utoken});
      return this.http.get("http://localhost:8037/loan/viewallloanrequests", {headers:httpHeaders})
    }
    public processLoan(reqID:string):Observable<any>{
      let utoken = localStorage.getItem("tokenId");
      if(utoken == null) utoken="";
      const httpHeaders = new HttpHeaders({"tokenId": utoken});
      return this.http.get("http://localhost:8037/loan/processrequests/"+reqID,  {headers:httpHeaders})
    }
    public viewAcceptedLoans():Observable<any>{
      let utoken = localStorage.getItem("tokenId");
      if(utoken == null) utoken="";
      const httpHeaders = new HttpHeaders({"tokenId": utoken});
      return this.http.get("http://localhost:8037/loan/viewapprovedloanrequests",{ headers:httpHeaders})
    }
    public viewRejectedLoans():Observable<any>{
      let utoken = localStorage.getItem("tokenId");
      if(utoken == null) utoken="";
      const httpHeaders = new HttpHeaders({"tokenId": utoken});
      return this.http.get("http://localhost:8037/loan/viewrejectedloanrequests",{headers:httpHeaders})
    }
    public viewAccounts():Observable<any>{
      let utoken = localStorage.getItem("tokenId");
      if(utoken == null) utoken="";
      const httpHeaders = new HttpHeaders({"tokenId": utoken});
      return this.http.get("http://localhost:8037/loan/viewupdatedaccountlist",{headers:httpHeaders})
    }
  
    
    public doTxn(form:TransferfundForm):Observable<any>{
      return this.http.post("http://localhost:8035/cgbank/transfer",form);
  }
  
    public viewbyaccID(accountId:string):Observable<any>{
      
      return this.http.get("http://localhost:8036/cgbank/viewaccountbyaccid/"+accountId);
  
    }
  
    public viewbycustID(customerId:string):Observable<any>{
      
      return this.http.get("http://localhost:8036/cgbank/viewaccountsbycustid/"+customerId);
  
    }
  
    public viewbyID(accountId:string):Observable<any>{
      
      return this.http.get("http://localhost:8034/cgbank/viewpassbook/"+accountId);
  
    }
  
   public viewbydate(startDt:Date,endDt:Date,accountId:string):Observable<any>{
     return this.http.get("http://localhost:8034/cgbank/viewpassbook/"+startDt+"/"+endDt+"/"+accountId);
    }
  
    public viewall(accountId:string):Observable<any>{
      let utoken = localStorage.getItem("tokenId");
      if(utoken == null) utoken="";
      const httpHeaders = new HttpHeaders({"tokenId":utoken});
      return this.http.get("http://localhost:8034/cgbank/viewall"+accountId,{headers:httpHeaders})
    }
  
    public doLogin(userId:string,pwd:string):Observable<any>{
      let postData = new FormData();
      postData.append('userid',userId);
      postData.append('password',pwd);
  
      return this.http.post("http://localhost:7082/login/login",postData, {responseType:'text'});
    }
  
    encrypt(token:string){
      let str="";
      for(let i = 0; i < token.length; ++i){
        str = str +String.fromCharCode(token.charCodeAt(i) + 3);
      }
      return str;
  
    }
    decrypt(token:string){
      let str = "";
      for (let i = 0; i < token.length; ++i){
        str = str + String.fromCharCode(token.charCodeAt(i) - 3);
      }
      console.log(str);
      return str;
    }
  
    public doLogout(){
      let utoken = localStorage.getItem("token");
      if(utoken == null) utoken="";
      const httpHeaders = new HttpHeaders({"tokenid":utoken});
      return this.http.get("http://localhost:7082/login/logout", {headers:httpHeaders,responseType:'text'});
  
    }
  
}
