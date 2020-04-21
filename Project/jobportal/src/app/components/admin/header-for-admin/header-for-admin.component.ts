import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../shared/services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-for-admin',
  templateUrl: './header-for-admin.component.html',
  styleUrls: ['./header-for-admin.component.scss']
})
export class HeaderForAdminComponent implements OnInit {

  constructor(private router: Router,private tokenStorageService: TokenStorageService) { }
  //constructor() { }
  ngOnInit(): void {
  } 
  logout() {
    this.tokenStorageService.signOut();
   
    this.router.navigate(['/guest']).then(() => {
      window.location.reload();
    });
   
  }

}
