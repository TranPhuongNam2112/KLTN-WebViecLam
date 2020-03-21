import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-c-register',
  templateUrl: './c-register.component.html',
  styleUrls: ['./c-register.component.scss']
})
export class CRegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      defaultFormEmail: new FormControl(null, [Validators.required, Validators.email]),
      nameInput: new FormControl(null, Validators.required)
    });
  }
  get defaultFormEmail() { return this.registerForm.get('defaultFormEmail'); }
  get nameInput() { return this.registerForm.get('nameInput'); }
  onSubmit() {
    this.registerForm.controls.defaultFormEmail.markAsTouched();
    this.registerForm.controls.nameInput.markAsTouched();
  }

}
