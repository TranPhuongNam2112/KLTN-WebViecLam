import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-for-candidate',
  templateUrl: './header-for-candidate.component.html',
  styleUrls: ['./header-for-candidate.component.scss']
})
export class HeaderForCandidateComponent implements OnInit {

  constructor(private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }
  logout() {
    this.tokenStorageService.signOut();
   
    this.router.navigate(['/guest']).then(() => {
      window.location.reload();
    });
   
  }
}
