import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // users:User;
  acc:Account;

  constructor(private userService:AccountService,private http:HttpClient) { }

  ngOnInit() {
  }

}
