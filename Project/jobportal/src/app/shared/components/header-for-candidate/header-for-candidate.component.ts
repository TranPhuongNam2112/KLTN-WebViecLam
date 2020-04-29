import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angularx-social-login';  
import { Socialusers } from '../../../_models/socialusers'  
import { SocialloginService } from '../../../_services/sociallogin.service';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-header-for-candidate',
  templateUrl: './header-for-candidate.component.html',
  styleUrls: ['./header-for-candidate.component.scss']
})
export class HeaderForCandidateComponent implements OnInit {
//social login biiến name
socialusers = new Socialusers(); 
  constructor(
    public OAuth: AuthService, 
    private router: Router,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));  
  }
  logout() {
    this.tokenStorageService.signOut();
   
    this.router.navigate(['/guest']).then(() => {
      window.location.reload();
    });
   
  }

}
