import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewbyidComponent } from './viewbyid/viewbyid.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewbydateComponent } from './viewbydate/viewbydate.component';
import { LoginComponent } from './login/login.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ErrorComponent } from './error/error.component';
import { SubnavComponent } from './subnav/subnav.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { ViewcustaccountComponent } from './viewcustaccount/viewcustaccount.component';
import { SubnavviewComponent } from './subnavview/subnavview.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';

import { LoancomponentComponent } from './loancomponent/loancomponent.component';
import { ViewacceptedloansComponent } from './viewacceptedloans/viewacceptedloans.component';
import { ViewaccountdetailsafteraddingloanComponent } from './viewaccountdetailsafteraddingloan/viewaccountdetailsafteraddingloan.component';
import { ViewandprocessloanrequestsComponent } from './viewandprocessloanrequests/viewandprocessloanrequests.component';
import { ViewrejectedloansComponent } from './viewrejectedloans/viewrejectedloans.component';

import { SearchbyPipe } from './searchby.pipe';
import { SearchbycustidPipe } from './searchbycustid.pipe';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HomeComponent } from './home/home.component';
import { SubnavaddComponent } from './subnavadd/subnavadd.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewbyidComponent,
    ViewbydateComponent,
    LoginComponent,
    ViewallComponent,
    ErrorComponent,
    SubnavComponent,
    ViewaccountComponent,
    ViewcustaccountComponent,
    SubnavviewComponent,
    TransferFundComponent,
    LoancomponentComponent,
    ViewacceptedloansComponent,
    ViewaccountdetailsafteraddingloanComponent,
    ViewandprocessloanrequestsComponent,
    ViewrejectedloansComponent,
    SearchbyPipe,
    SearchbycustidPipe,
    AddAccountComponent,
    AddCustomerComponent,
    HomeComponent,
    SubnavaddComponent,
    LoanrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
