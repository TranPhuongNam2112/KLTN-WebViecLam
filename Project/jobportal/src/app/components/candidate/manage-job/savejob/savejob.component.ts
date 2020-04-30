import { Component, OnInit } from '@angular/core';
import { User_Account } from 'src/app/_models/user_account';
import { Observable } from "rxjs";
import { UserAccountService } from '../../../../_services/candidate/user-account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-savejob',
  templateUrl: './savejob.component.html',
  styleUrls: ['./savejob.component.scss']
})
export class SavejobComponent implements OnInit {
  user_account: User_Account;
  constructor(
    private userAccountService: UserAccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user_account = new User_Account();
    this.userAccountService.getAccounts()
      .subscribe(data => {
        console.log(data)
        this.user_account = data;
      }, error => console.log(error));
  }
  isSavedJobPostEmpty(): boolean {
    let keys = Object.keys(this.user_account.candidate.savedJobPosts);
    if (keys.length) { return false; }
    else return true;
  }

}
