import { Component, OnInit } from '@angular/core';
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
  selector: 'app-c-register',
  templateUrl: './c-register.component.html',
  styleUrls: ['./c-register.component.scss']
})
export class CRegisterComponent implements OnInit {
  // registerForm: FormGroup;
  registerForm: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isShown: boolean = false;
  error: Params;
  //social login start
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  showCandidate = false;
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
    //toast 
    config: NgbModalConfig, private modalService: NgbModal,
    public toastService: ToastService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.error = params;
    });
  }

  ngOnInit(): void {
    // this.registerForm.role="candidate";
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  toggleShow() {
    this.isShown = true;
    setTimeout(() => {
      this.isShown = false;
    }, 3000)
  }
  onSubmit() {
    this.authService.registerCandidate(this.registerForm).subscribe(
      data => {

        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  //social login start
  public socialSignIn(socialProvider: string, dangerTpl, successTpl) {
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
        this.SavesresponseFB(socialusers, dangerTpl, successTpl);
      } else if (socialProvider === 'google') {
        this.SavesresponseGG(socialusers, dangerTpl, successTpl);
      }
    });
  }
  SavesresponseGG(socialusers: Socialusers, dangerTpl, successTpl) {
    this.SocialloginService.loginGoogleCandidate(socialusers).subscribe((res: any) => {
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
      // this.errorMessage = err.error.message;
      this.errorMessage = "Are you employer? Look like you are loging in as employer user. Click here ";
      this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
    }
    )
  }
  SavesresponseFB(socialusers: Socialusers, dangerTpl, successTpl) {
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
      // this.errorMessage = err.error.message;
      this.errorMessage = "Are you employer? Look like you are loging in as employer user. Click here ";
      this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
    }
    )
  }
  //social login end

}
