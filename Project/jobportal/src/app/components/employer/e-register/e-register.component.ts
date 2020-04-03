import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';


@Component({
  selector: 'app-e-register',
  templateUrl: './e-register.component.html',
  styleUrls: ['./e-register.component.scss']
})
export class ERegisterComponent implements OnInit {
  eregisterForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.eregisterForm = new FormGroup({
      defaultFormEmail: new FormControl(null, [Validators.required, Validators.email]),
      nameInput: new FormControl(null, Validators.required)
    });
    
  }
  get defaultFormEmail() { return this.eregisterForm.get('defaultFormEmail'); }
  get nameInput() { return this.eregisterForm.get('nameInput'); }
  onSubmit() {
    this.eregisterForm.controls.defaultFormEmail.markAsTouched();
    this.eregisterForm.controls.nameInput.markAsTouched();
    this.authService.register(this.eregisterForm).subscribe(
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
