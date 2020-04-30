import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
// import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angularx-social-login';  
import { Socialusers } from '../../../_models/socialusers'  
import { SocialloginService } from '../../../_services/sociallogin.service';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User_Account } from 'src/app/_models/user_account';
import { Observable } from "rxjs";
import {UserAccountService} from '../../../_services/candidate/user-account.service';

@Component({
  selector: 'app-header-for-candidate',
  templateUrl: './header-for-candidate.component.html',
  styleUrls: ['./header-for-candidate.component.scss']
})
export class HeaderForCandidateComponent implements OnInit {
//social login biiến name
socialusers = new Socialusers(); 
user_account: User_Account;
  constructor(
    // public OAuth: AuthService, 
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private userAccountService: UserAccountService
    ) { }

  ngOnInit(): void {
    // this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
    // this.reloadData();
    
    this.user_account= new User_Account();
    this.userAccountService.getAccounts()
      .subscribe(data => {
        console.log(data)
        this.user_account = data;
      }, error => console.log(error));
  }
  
  logout() {
    this.tokenStorageService.signOut();
   
    this.router.navigate(['/guest']).then(() => {
      window.location.reload();
    });
   
  }

}
