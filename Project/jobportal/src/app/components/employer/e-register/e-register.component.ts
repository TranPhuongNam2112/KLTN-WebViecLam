import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-e-register',
  templateUrl: './e-register.component.html',
  styleUrls: ['./e-register.component.scss']
})
export class ERegisterComponent implements OnInit {
  eregisterForm: FormGroup;
  constructor() { }

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
  }

}
