import { Component, PipeTransform, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { AccountService } from './service/account.service';
import {User_Account} from '../../../_models/user-account';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {
  accounts: Observable<User_Account[]>;
  public pageNo: number=0;
  public pages: Array<number>;
  constructor( private accountService: AccountService) {

  }
  setPage(i, event:any){
    event.preventDefault();
    this.pageNo = i;
    this.getAccounts();
  }
  ngOnInit() {
    // this.reloadData();
    this.getAccounts();
  }
 
  // reloadData() {
  //   this.accountService.getAllAccountList()
  //     .subscribe(
  //       data => {
  //         this.accounts = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  getAccounts(){
    this.accountService.getAccounts(this.pageNo).subscribe(
      data=> {
        console.log(data);
        this.accounts=data['content'];
        this.pages= new Array(data['totalPages'])
      },
      (error)=> {
        console.log(error.error.message)
      }
    );
  }

}
