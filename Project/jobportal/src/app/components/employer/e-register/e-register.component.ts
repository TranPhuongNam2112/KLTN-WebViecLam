import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-e-register',
  templateUrl: './e-register.component.html',
  styleUrls: ['./e-register.component.scss']
})
export class ERegisterComponent implements OnInit {
  eregisterForm: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.eregisterForm.role = "employer";
  }
  
  onSubmit() {
    this.authService.registerEmployer(this.eregisterForm).subscribe(
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
