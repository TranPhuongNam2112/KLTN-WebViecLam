import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Role } from 'src/app/_models/role';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  // private roles: Role[];
  private roles: String[];
  isLoggedIn = false;
  // showEmployer = false;
  constructor(private router: Router, private tokenStorageService: TokenStorageService) {
   
   }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
   
   
    
    // if (this.isLoggedIn) {
    //   // const user = this.tokenStorageService.getUser();
    //   // this.roles = user.roles;
    //   // this.showEmployer = this.roles.includes('ROLE_EMPLOYER');
    //   this.roles = this.tokenStorageService.getUser().roles;
    //   console.log(this.roles);
    //   this.showEmployer = this.roles.some(i=>i.name.includes('ROLE_EMPLOYER'));
    // }

    // else if (this.showEmployer) {
    //   this.router.navigate(['/employer']);
    // }
  }
}


