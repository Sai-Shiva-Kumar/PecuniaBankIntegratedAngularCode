import { Component, OnInit } from '@angular/core';

import { PecuniabankService } from '../pecuniabank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(passbookservice:PecuniabankService) { }

  token:string;
  
  ngOnInit() {
    this.token=localStorage.getItem("token");
    
  }

}
