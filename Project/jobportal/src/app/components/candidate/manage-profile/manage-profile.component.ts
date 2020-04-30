import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User_Account } from 'src/app/_models/user_account';
import { Observable } from "rxjs";
import { UserAccountService } from '../../../_services/candidate/user-account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  model: NgbDateStruct;
  active = 1;
  //ng
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  //ngToast
  show = true;

  //modal close
  closeResult = '';
  //get info candidate
  user_account: User_Account;
  constructor(
    private modalService: NgbModal,
    private userAccountService: UserAccountService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
    this.user_account = new User_Account();
    this.userAccountService.getAccounts()
      .subscribe(data => {
        console.log(data)
        this.user_account = data;
      }, error => console.log(error));
  }
  public changeSuccessMessage() {
    this._success.next(`Update profile successfully.`);
  }
  isExperiencesEmpty(): boolean {
    let keys = Object.keys(this.user_account.candidate.experiences);
    if (keys.length) { return false; }
    else return true;
  }
  isEducationsEmpty(): boolean {
    let keys = Object.keys(this.user_account.candidate.educations);
    if (keys.length) { return false; }
    else return true;
  }
  //ngToast
  close() {
    this.show = false;
    setTimeout(() => this.show = true, 5000);
  }
  //open modal
  openLg(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
