import { Component, OnInit, NgZone} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { _AuthService } from '../../../shared/services/auth.service';
import { TokenStorageService } from '../../../shared/services/token-storage.service';
// import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
// import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { Socialusers } from '../../../_models/socialusers'
import { SocialloginService } from '../../../_services/sociallogin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
//toast
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';
@Component({
  selector: 'app-e-login',
  templateUrl: './e-login.component.html',
  styleUrls: ['./e-login.component.scss']
})
export class ELoginComponent implements OnInit {
  loginForm: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
     roles: string[] = [];
     showEmployer = false;
       //social login start
       response;
       socialusers = new Socialusers();
       //social login end

  constructor(
    private authService: _AuthService,
    private tokenStorage: TokenStorageService,
    //  social login start
    // public OAuth: AuthService,
    // private SocialloginService: SocialloginService,
    // private router: Router,
    //  social login end
      //toast
      config: NgbModalConfig, private modalService: NgbModal,
      public toastService: ToastService,
      private ngZone: NgZone 
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
        console.warn("Bearer" + this.loginForm.value);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        console.warn("Bearer" + this.loginForm.value);
      },
      err => {
         this.errorMessage = err.error.message;
       // this.errorMessage = "Error email or password";
        this.isLoginFailed = true;

      }
    );
    console.warn(this.loginForm.value);
  }
  reloadPage() {
    window.location.reload();
  }
  //social login start
  // public socialSignIn(socialProvider: string,dangerTpl,successTpl) {
  //   let socialPlatformProvider;
  //   if (socialProvider === 'facebook') {
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   } else if (socialProvider === 'google') {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
  //   this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
  //     console.log(socialProvider, socialusers);
  //     console.log(socialusers);
  //     if (socialProvider === 'facebook') {
  //       this.SavesresponseFB(socialusers,dangerTpl,successTpl);
  //     } else if (socialProvider === 'google') {
  //       this.SavesresponseGG(socialusers,dangerTpl,successTpl);
  //     }
     
  //   });
  // }
  // SavesresponseGG(socialusers: Socialusers,dangerTpl,successTpl) {
  //   this.SocialloginService.loginGoogleEmployer(socialusers).subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //     this.socialusers = res;
  //     this.response = res.userDetail;
  //     localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
  //     console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));

  //     this.tokenStorage.saveToken(res.accessToken);
  //     this.tokenStorage.saveUser(res);
  //     this.isLoginFailed = false;
  //     this.isLoggedIn = true;
  //     console.log(this.roles);
  //     this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
  //    this.router.navigate(['/employer']);
  //   }, err => {
  //     // this.errorMessage = err.error.message;
  //  //this.errorMessage = err.message;
  //  this.errorMessage="Are you candidate? Look like you are loging in as candidate user. Click here ";
  //  this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
  //   }
  //   )
  // }
  // SavesresponseFB(socialusers: Socialusers,dangerTpl,successTpl) {
  //   this.SocialloginService.loginFacebookEmployer(socialusers).subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //     this.socialusers = res;
  //     this.response = res.userDetail;
  //     localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
  //     console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));

  //     this.tokenStorage.saveToken(res.accessToken);
  //     this.tokenStorage.saveUser(res);
  //     this.isLoginFailed = false;
  //     this.isLoggedIn = true;
  //     console.log(this.roles);
  //     this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
  //    this.router.navigate(['/employer']);
  //   }, err => {
  //     // this.errorMessage = err.error.message;
  //  //this.errorMessage = err.message;
  //  this.errorMessage="Are you candidate? Look like you are loging in as canddidate user. Click here ";
  //  this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
  //   }
  //   )
  // }
  //social login end
}
