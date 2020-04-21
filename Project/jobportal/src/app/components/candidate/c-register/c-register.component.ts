import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
@Component({
  selector: 'app-c-register',
  templateUrl: './c-register.component.html',
  styleUrls: ['./c-register.component.scss']
})
export class CRegisterComponent implements OnInit {
  // registerForm: FormGroup;
  registerForm:any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isShown: boolean = false ;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.registerForm.role="candidate";
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

}
