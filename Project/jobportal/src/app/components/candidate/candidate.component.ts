import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { Observable } from 'rxjs';
import { eRole } from 'src/app/_models/Erole';
import { Role } from 'src/app/_models/role';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  private roles: String[];
  isLoggedIn = false;
  // showCandidate = false;
  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
   
    // if (this.isLoggedIn) {
      
      // const user = this.tokenStorageService.getUser();
    //   // this.roles = user.roles;
    //   // this.showCandidate = this.roles.includes('ROLE_CANDIDATE');
    //   //role type Role[]
    //   // this.roles = this.tokenStorageService.getUser().roles;
    //   // console.log(this.roles);
    //   // this.showCandidate = this.roles.some(i=>i.name.includes('ROLE_CANDIDATE'));
    //   // console.log(this.showCandidate);
    // }
    // if (this.showCandidate) {
    //   this.router.navigate(['/candidate']);
    // }
  }
}


