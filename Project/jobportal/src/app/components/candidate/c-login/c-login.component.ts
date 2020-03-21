import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.scss']
})
export class CLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      defaultFormEmail: new FormControl(null, [Validators.required, Validators.email]),
      defaultFormPass: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  get defaultFormEmail() { return this.loginForm.get('defaultFormEmail'); }
  get defaultFormPass() { return this.loginForm.get('defaultFormPass'); }
  onSubmit() {
    this.loginForm.controls.defaultFormEmail.markAsTouched();
    this.loginForm.controls.defaultFormPass.markAsTouched();
  }
}
