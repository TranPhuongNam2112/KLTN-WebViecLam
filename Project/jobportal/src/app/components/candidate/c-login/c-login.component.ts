import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { _AuthService } from '../../../shared/services/auth.service';
import { TokenStorageService } from '../../../shared/services/token-storage.service';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { Socialusers } from '../../../_models/socialusers'
import { SocialloginService } from '../../../_services/sociallogin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
//toast
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CLoginComponent implements OnInit {
    // loginForm:  FormGroup;
    loginForm: any = {};
    isLoggedIn = false;
    //theem
    showCandidate = false;
    showEmployer = false;
    showAdmin= false;
    //theem
    isLoginFailed = false;
    errorMessage = '';
     roles: string[] = [];
   
    //showCandidate = false;
    //social login start
     response;
    socialusers = new Socialusers();
    //social login end
    constructor(
      private authService: _AuthService,
      private tokenStorage: TokenStorageService,
      //  social login start
      public OAuth: AuthService,
      private SocialloginService: SocialloginService,
      private router: Router,
      //  social login end
      //toast
      config: NgbModalConfig, private modalService: NgbModal,
      public toastService: ToastService,
      private ngZone: NgZone 
    ) {
      config.backdrop = 'static';
      config.keyboard = false;
     }
  
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
          //theem
          console.log(this.roles);
          // this.showCandidate = this.roles.some(i=>i.name.includes('ROLE_CANDIDATE'));
          // this.showEmployer = this.roles.some(i=>i.name.includes('ROLE_EMPLOYER'));
          // this.showAdmin = this.roles.some(i=>i.name.includes('ROLE_ADMIN'));
          this.showCandidate = this.roles.includes('ROLE_CANDIDATE');
          this.showEmployer = this.roles.includes('ROLE_EMPLOYER');
          this.showAdmin= this.roles.includes ('ROLE_ADMIN');
          console.log("canddiate"+this.showCandidate);
          console.log("employer"+this.showEmployer);
          console.log("admin"+this.showAdmin);
          // this.reloadPage();
          console.warn("Bearer" + this.loginForm.value);
          if (this.showCandidate) {
            this.router.navigate(['/candidate']);
          }
          else if (this.showEmployer) {
            this.router.navigate(['/employer']);
          }
          else if (this.showAdmin){
            this.router.navigate(['/admin']);
          }
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
    public socialSignIn(socialProvider: string,dangerTpl,successTpl) {
      let socialPlatformProvider;
      if (socialProvider === 'facebook') {  
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
      } else if (socialProvider === 'google') {
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
        console.log(socialProvider, socialusers);
        console.log(socialusers);
        if (socialProvider === 'facebook') {
          this.SavesresponseFB(socialusers,dangerTpl,successTpl);
        } else if (socialProvider === 'google') {
          this.SavesresponseGG(socialusers,dangerTpl,successTpl);
        }
      });
    }
    SavesresponseGG(socialusers: Socialusers,dangerTpl,successTpl) {
      this.SocialloginService.loginGoogleCandidate(socialusers).subscribe((res: any) => {
        debugger;
        console.log(res);
        this.socialusers = res;
      
        this.response = res.userDetail;
        localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
        console.log("nhìn nè mày hihi");
        // console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
        console.log(localStorage.getItem('socialusers'));

        this.tokenStorage.saveToken(res.accessToken);

        this.tokenStorage.saveUser(res);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(this.roles);
         this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
       this.router.navigate(['/candidate']);
     
      }, err => {
         //this.errorMessage = err.message;
        this.errorMessage="Are you employer? Look like you are loging in as employer user. Click here ";
        this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
      }
      )
    }
    SavesresponseFB(socialusers: Socialusers,dangerTpl,successTpl) {
      this.SocialloginService.loginFacebookCandidate(socialusers).subscribe((res: any) => {
        debugger;
        console.log(res);
        this.socialusers = res;
        this.response = res.userDetail;
        localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
        console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));

        this.tokenStorage.saveToken(res.accessToken);
        this.tokenStorage.saveUser(res);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(this.roles);
         this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
       this.router.navigate(['/candidate']);
     
      }, err => {
         //this.errorMessage = err.message;
        this.errorMessage="Are you employer? Look like you are loging in as employer user. Click here ";
        this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
      }
      )
    }
    //social login end
}
