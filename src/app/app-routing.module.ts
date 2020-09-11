import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewbyidComponent } from './viewbyid/viewbyid.component';
import { ViewbydateComponent } from './viewbydate/viewbydate.component';
import { LoginComponent } from './login/login.component';
import {CgguardGuard} from './cgguard.guard';


import { ViewallComponent } from './viewall/viewall.component';
import { ErrorComponent } from './error/error.component';
import { SubnavComponent } from './subnav/subnav.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { ViewcustaccountComponent } from './viewcustaccount/viewcustaccount.component';
import { SubnavviewComponent } from './subnavview/subnavview.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { ViewandprocessloanrequestsComponent } from './viewandprocessloanrequests/viewandprocessloanrequests.component';
import { ViewacceptedloansComponent } from './viewacceptedloans/viewacceptedloans.component';
import { ViewrejectedloansComponent } from './viewrejectedloans/viewrejectedloans.component';
import { ViewaccountdetailsafteraddingloanComponent } from './viewaccountdetailsafteraddingloan/viewaccountdetailsafteraddingloan.component';
import { LoancomponentComponent } from './loancomponent/loancomponent.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SubnavaddComponent } from './subnavadd/subnavadd.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';


const routes: Routes = [
  {path:'newaccount', component:SubnavaddComponent},
  {path:'addaccount',component:AddAccountComponent},
  {path:'addcustomer',component:AddCustomerComponent},
  {path:'viewandprocessloanrequest', component:ViewandprocessloanrequestsComponent,canActivate:[CgguardGuard], data:{role:'admin'}},
  {path:'viewapprovedloans', component:ViewacceptedloansComponent,canActivate:[CgguardGuard]},
  {path:'viewrejectedloans',component:ViewrejectedloansComponent,canActivate:[CgguardGuard]},
  {path:'accountlistafteraddingloan',component:ViewaccountdetailsafteraddingloanComponent,canActivate:[CgguardGuard]},
  {path:'Loan',component:LoancomponentComponent,canActivate:[CgguardGuard], data:{role:'admin'}},
  {path:'transfer', component:TransferFundComponent},
  {path:'getbyid', component:ViewbyidComponent},
  {path:'getbydate', component:ViewbydateComponent},
  {path:'viewall', component:ViewallComponent, canActivate:[CgguardGuard],data:{role:"admin"}},
  {path:'login', component:LoginComponent},
  {path:'transaction',component:SubnavComponent},
  {path:'details',component:SubnavviewComponent},
  {path:'error', component:ErrorComponent},
  {path:'getbyaccid', component:ViewaccountComponent},
  {path:'getbycustid', component:ViewcustaccountComponent},
  {path:'loanrequest',component:LoanrequestComponent, canActivate:[CgguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
