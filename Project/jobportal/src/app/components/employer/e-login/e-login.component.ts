import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-e-login',
  templateUrl: './e-login.component.html',
  styleUrls: ['./e-login.component.scss']
})
export class ELoginComponent implements OnInit {
  eloginForm:  FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.eloginForm = new FormGroup({
      defaultFormEmail: new FormControl(null, [Validators.required, Validators.email]),
      defaultFormPass: new FormControl(null, Validators.required)
    });
  }
  get defaultFormEmail() { return this.eloginForm.get('defaultFormEmail'); }
  get defaultFormPass() { return this.eloginForm.get('defaultFormPass'); }
  onSubmit() {
    this.eloginForm.controls.defaultFormEmail.markAsTouched();
    this.eloginForm.controls.defaultFormPass.markAsTouched();
  }

}
