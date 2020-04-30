import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { _AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
// import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
// import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { Socialusers } from '../../../_models/socialusers'
import { SocialloginService } from '../../../_services/sociallogin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm:  FormGroup;
  loginForm: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  //social login start
  response;
  socialusers = new Socialusers();
  //social login end
  constructor(
    private authService: _AuthService,
    private tokenStorage: TokenStorageService,
    //  social login start
    // public OAuth: AuthService,
    private SocialloginService: SocialloginService,
    private router: Router
    //  social login end
  ) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit() {
    this.authService.login(this.loginForm).subscribe(
      data => {
        console.warn("sdsdsd" + this.loginForm.value);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        console.warn("sdsdsd" + this.loginForm.value);
      },
      err => {
        // this.errorMessage = err.error.message;
           this.errorMessage = "Error email or password";
        this.isLoginFailed = true;

      }
    );
    console.warn(this.loginForm.value);
  }
  reloadPage() {
    window.location.reload();
  }
  //social login start
  // public socialSignIn(socialProvider: string) {
  //   let socialPlatformProvider;
  //   if (socialProvider === 'google') {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
  //   this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
  //     console.log(socialProvider, socialusers);
  //     console.log(socialusers);
  //     this.Savesresponse(socialusers);
  //   });
  // }
  // Savesresponse(socialusers: Socialusers) {
  //   this.SocialloginService.loginGoogleCandidate(socialusers).subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //     this.socialusers = res;
  //     this.response = res.userDetail;
  //     localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
  //     console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
  //     this.router.navigate(['/candidate']);
  //   }, err => {
  //     this.errorMessage = err.error.message;

  //   }
  //   )
  // }
  //social login end

}
