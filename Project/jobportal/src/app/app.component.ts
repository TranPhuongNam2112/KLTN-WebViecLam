import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/services/token-storage.service';
import {Role} from './_models/role';
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
  showAdmin= false;
  showEguest = false;
  showGuest = true;
  constructor(
    private router: Router, private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log(this.roles);
      this.showCandidate = this.roles.includes('ROLE_CANDIDATE');
      this.showEmployer = this.roles.includes('ROLE_EMPLOYER');
      this.showAdmin= this.roles.includes ('ROLE_ADMIN');
      // this.showCandidate = this.roles.some(i=>i.name.includes('ROLE_CANDIDATE'));
      // this.showEmployer = this.roles.some(i=>i.name.includes('ROLE_EMPLOYER'));
      // this.showAdmin = this.roles.some(i=>i.name.includes('ROLE_ADMIN'));
      // console.log("canddiate"+this.showCandidate);
      // console.log("employer"+this.showEmployer);
      // console.log("admin"+this.showAdmin);

    }
    if (this.showCandidate) {
      this.router.navigate(['/candidate']);
    }
    else if (this.showEmployer) {
      this.router.navigate(['/employer']);
    }
    else if (this.showAdmin){
      this.router.navigate(['/admin']);
    }
  }

 
}
