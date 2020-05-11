import { Component, OnInit, NgZone, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { _AuthService } from '../../../shared/services/auth.service';
import { TokenStorageService } from '../../../shared/services/token-storage.service';
// import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
// import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { Socialusers } from '../../../_models/socialusers';
import { User_Account } from '../../../_models/user_account';
import { SocialloginService } from '../../../_services/sociallogin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
//toast
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../_services/toast-service.service';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  
})
export class CLoginComponent implements OnInit {

  // loginForm:  FormGroup;
  loginForm: any = {};
  isLoggedIn = false;
  //theem
  showCandidate = false;
  showEmployer = false;
  showAdmin = false;
  //theem
  isLoginFailed = false;
  isShown: boolean = false;
  errorMessage = '';
  error: Params;
  roles: string[] = [];
  // error = this.getParameterByName("error");
  //showCandidate = false;
  //social login start
  response;
  user_Account = new User_Account();
  socialusers = new Socialusers();
  //  token: string = this.getParameterByName("token");

  //social login end
  constructor(
    private routersnap: ActivatedRoute,
    private authService: _AuthService,
    private tokenStorage: TokenStorageService,
    //  social login start
    // public OAuth: AuthService,
    // private SocialloginService: SocialloginService,
    private router: Router,
    //  social login end
    //toast
    config: NgbModalConfig, private modalService: NgbModal,
    public toastService: ToastService,
    private ngZone: NgZone,
    private route: ActivatedRoute
  
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.error= params;
  });

  }

  ngOnInit(): void {
    //   let token: string = this.getParameterByName("token", location.href);
    //    console.log("hihih");
    // console.log(token);
    // var redirectUrl: string = localStorage.getItem('token');
    // console.log("hihih");
    // console.log(redirectUrl);
    // let token: string = getParameterByName("access_token", location.href);
    // localStorage.setItem('dataSource', JSON.stringify({ token: token, name: name }));
    //   const token = this.getParameterByName('token',location.href);
    //   if(token) {
    //     localStorage.setItem('dataSource', token);
    //    console.log("hihih");
    //    console.log('dataSource');
    // }
    //lamf
    // console.log("hihihihihihi access nef");
    // console.log(this.routersnap.snapshot.queryParamMap.get('token'));
    // let token = this.getParameterByName("token");
    // if (token) {
    //   this.tokenStorage.saveToken(token);
    //   console.log("access_token" + token);
    //   this.router.navigate(['/candidate']);
    // }

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    
    //lam

    // if (this.token) {
    //   localStorage.setItem('ACCESS_TOKEN', this.token);
    //   this.isLoggedIn = true;
    //   console.log(this.isLoggedIn);
    //   this.router.navigate(['/candidate']);
    // }



    //   else{
    //        let token: string = this.getParameterByName("token", location.href);
    //    console.log("hihih");
    // console.log(token);
    //   }

  }
  toggleShow() {
    this.isShown = true;
    setTimeout(() => {
      this.isShown = false;
    }, 3000)
  }
  onSubmit() {

    this.authService.login(this.loginForm).subscribe(
      data => {

        // let token: string = this.getParameterByName("token");
        //   console.log("access-toek "+token);


        // let token: string = this.getParameterByName("token");

        // console.log("access-toek " + this.token);
        // this.router.navigate(['/candidate']);

        // localStorage.setItem('token', JSON.stringify(this.user_Account));
        // console.warn("sdsdsd" + this.loginForm.value);
        // console.log(localStorage.getItem('token'));
        this.tokenStorage.saveToken(data.accessToken);
        console.log("hihihih" + data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log("nhin ne data");
        console.log(data);
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
        this.showAdmin = this.roles.includes('ROLE_ADMIN');
        console.log("canddiate" + this.showCandidate);
        console.log("employer" + this.showEmployer);
        console.log("admin" + this.showAdmin);
        // this.reloadPage();
        // console.warn("Bearer" + this.loginForm.value);
        if (this.showCandidate) {
          this.router.navigate(['/candidate']);
        }
        else if (this.showEmployer) {
          // this.router.navigate(['/employer']).then(() => {
          //   window.location.reload();
          // });;
          this.router.navigate(['/employer']);
        }
        else if (this.showAdmin) {
          this.router.navigate(['/admin']);
        }
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
  // public socialSignIn(socialProvider: string, dangerTpl, successTpl) {
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
  //       this.SavesresponseFB(socialusers, dangerTpl, successTpl);
  //     } else if (socialProvider === 'google') {
  //       this.SavesresponseGG(socialusers, dangerTpl, successTpl);
  //     }
  //   });
  // }

  // SavesresponseGG(socialusers: Socialusers, dangerTpl, successTpl) {
  //   this.SocialloginService.loginGoogleCandidate(socialusers).subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //     this.socialusers = res;

  //     this.response = res.userDetail;
  //     localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
  //     // console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
  //     console.log(localStorage.getItem('socialusers'));

  //     //theem

  //     //theem
  //     this.tokenStorage.saveToken(res.accessToken);
  //     this.tokenStorage.saveUser(res);
  //     this.isLoginFailed = false;
  //     this.isLoggedIn = true;
  //     console.log(this.roles);
  //     this.toastService.show(successTpl, { classname: 'bg-success text-light ', delay: 6000 });
  //     this.router.navigate(['/candidate']);

  //   }, err => {
  //     //this.errorMessage = err.message;
  //     this.errorMessage = "Are you employer? Look like you are loging in as employer user. Click here ";
  //     this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
  //   }
  //   )
  // }
  // SavesresponseFB(socialusers: Socialusers, dangerTpl, successTpl) {
  //   this.SocialloginService.loginFacebookCandidate(socialusers).subscribe((res: any) => {
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
  //     this.router.navigate(['/candidate']);

  //   }, err => {
  //     //this.errorMessage = err.message;
  //     this.errorMessage = "Are you employer? Look like you are loging in as employer user. Click here ";
  //     this.toastService.show(dangerTpl, { classname: 'bg-warning text-light font-weight-bolder text-monospace mt-5', delay: 6000 });
  //   }
  //   )
  // }

  //social login end



}
