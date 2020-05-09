import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from '../../services/reset-password.service';
import { ResetPassword } from '../../../_models/resetPassword';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../_services/toast-service.service';
const resetTOKEN_KEY = 'reset-token';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPass: ResetPassword = new ResetPassword();
  submitted = false;
  isSuccessful: boolean;
  responseMessage='';
  constructor(
    private resetPasswordService: ResetPasswordService,
    private route: ActivatedRoute,
    private router: Router,
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
    let resetPasstoken = this.getParameterByName("reset_token");
    if (resetPasstoken) {
      // this.isLoggedIn = true;
      localStorage.setItem(resetTOKEN_KEY, resetPasstoken);
      console.log("resetPass_token" + localStorage.getItem(resetTOKEN_KEY));
    }
  }
  resetPassword(dangerTpl, successTpl) {
    this.resetPasswordService.resetPassword(localStorage.getItem(resetTOKEN_KEY), this.resetPass)
      .subscribe(
        response => {
          console.log(response);
        //  this.responseMessage=response.toString();
          if(response ==="Password updated successfully!"){
            this.isSuccessful=true;
            this.toastService.show(successTpl, { classname: 'bg-success text-light mt-5 ', delay: 6000 });
            console.log(this.isSuccessful);
            this.responseMessage=response.toString();
          } 
          else {
            this.responseMessage="Incorrect confirm password!";
            this.isSuccessful=false;
            this.toastService.show(dangerTpl, { classname: 'bg-danger text-light mt-5', delay: 6000 });
          }
        },
        error => { 
          console.log(error) ;
          this.responseMessage="Invalid request!";
          this.isSuccessful=false;
          this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 6000 });
        });
  }
  onSubmit(dangerTpl, successTpl) {
    this.submitted = true;
    this.resetPassword(dangerTpl, successTpl);
  }
  getParameterByName(name: string): string {
    // if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(location.href);
    // results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


}
