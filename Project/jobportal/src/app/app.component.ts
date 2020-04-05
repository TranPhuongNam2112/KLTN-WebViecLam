import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jobportalapp';
  private roles: string[];
  isLoggedIn = false;
  showCandidate = false;
  showEmployer = false;
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
      this.showCandidate = this.roles.includes('ROLE_CANDIDATE');
      this.showEmployer = this.roles.includes('ROLE_EMPLOYER');


    }
    if (this.showCandidate) {
      this.router.navigate(['/candidate']);
    }
    else if (this.showEmployer) {
      this.router.navigate(['/employer']);
    }
  }

 
}
