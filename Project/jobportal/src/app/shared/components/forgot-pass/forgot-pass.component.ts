import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User_Account } from '../../../_models/user_account';
import { ForgorPasswordService } from '../../services/forgor-password.service';
import { ToastService } from '../../../_services/toast-service.service';
@Component({
  selector: 'forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  user: User_Account = new User_Account();
  submitted = false;
  isSuccessful: boolean;
  isShown: boolean = false;
  responseMessage='';
  constructor(
    private forgorPasswordService: ForgorPasswordService,
    private router: Router,
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
  }
  resetEmail(): void {
    this.submitted = false;
    this.user = new User_Account();
  }
  save(dangerTpl, successTpl) {
    this.forgorPasswordService.forgotPassword(this.user)
      .subscribe(data => {
        console.log(data);
        this.responseMessage=data.toString();
        if(data==="Please check your email for further instructions."){
          this.isSuccessful=true;
          this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
          console.log(this.isSuccessful);
        } 
        else {
          this.isSuccessful=false;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
        }
      });
     this.user = new User_Account();
   
  }
  toggleShow() {
    this.isShown = true;
    setTimeout(() => {
      this.isShown = false;
    }, 3000)
  }
  onSubmit(dangerTpl, successTpl) {
    this.submitted = true;
    this.save(dangerTpl, successTpl);
  }

}
