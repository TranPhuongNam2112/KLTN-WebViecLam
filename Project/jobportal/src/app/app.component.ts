import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { TokenStorageService } from './shared/services/token-storage.service';
import { Role } from './_models/role';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jobportalapp';
  private roles: String[];
  isLoggedIn = false;
  showCandidate = false;
  showEmployer = false;
  showAdmin = false;
  showEguest = false;
  showGuest = true;
  errorMessage = '';
  error = '';

  constructor(
    private router: Router, private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit() {

    let token = this.getParameterByName("token");
    // let resetPasstoken = this.getParameterByName("reset_token");
    this.error = this.getParameterByName("error");
    if (token) {
      this.isLoggedIn = true;
      this.tokenStorageService.saveToken(token);
      console.log("access_token" + token);
      this.router.navigate(['/candidate']);
    }

    let navigationExtras: NavigationExtras = {
      queryParams: {
        error: this.getParameterByName("error")
      }
    }
    if (this.error) { this.router.navigate(['/guest/login'], navigationExtras); }
    // if (resetPasstoken) {
    //   // this.isLoggedIn = true;
    //   localStorage.setItem('resetPass_token',resetPasstoken);
    //   console.log("resetPass_token" + localStorage.getItem('resetPass_token'));
    //   this.router.navigate(['/resetpassword']);
    // }






    // this.isLoggedIn = !!this.tokenStorageService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.roles = user.roles;
    //   console.log(this.roles);
    //   this.showCandidate = this.roles.includes('ROLE_CANDIDATE');
    //   this.showEmployer = this.roles.includes('ROLE_EMPLOYER');
    //   this.showAdmin= this.roles.includes ('ROLE_ADMIN');
    //   // this.showCandidate = this.roles.some(i=>i.name.includes('ROLE_CANDIDATE'));
    //   // this.showEmployer = this.roles.some(i=>i.name.includes('ROLE_EMPLOYER'));
    //   // this.showAdmin = this.roles.some(i=>i.name.includes('ROLE_ADMIN'));
    //   // console.log("canddiate"+this.showCandidate);
    //   // console.log("employer"+this.showEmployer);
    //   // console.log("admin"+this.showAdmin);

  }
  //   if (this.showCandidate) {
  //     this.router.navigate(['/candidate']);
  //   }
  //   else if (this.showEmployer) {
  //     this.router.navigate(['/employer']);
  //   }
  //   else if (this.showAdmin){
  //     this.router.navigate(['/admin']);
  //   }
  // }
  public getParameterByName(name: string): string {
    // if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(location.href);
    // results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

}
