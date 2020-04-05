import { Component, OnInit } from '@angular/core';
// import {SearchJobComponent } from '../search-job/search-job.component';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-for-employer',
  templateUrl: './header-for-employer.component.html',
  styleUrls: ['./header-for-employer.component.scss']
})
export class HeaderForEmployerComponent implements OnInit {

  constructor(  private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }
  logout() {
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(['/eguest']).then(() => {
      window.location.reload();
    });
  }
}
