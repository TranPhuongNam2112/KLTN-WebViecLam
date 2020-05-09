import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ManageUserService} from '../../../_services/admin/manage-user.service';
import {User_Account} from '../../../_models/user_account';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  public users: Observable<User_Account[]> ;
  public pageNo: number=0;
  public pages: Array<number>;
  constructor(
    private userService: ManageUserService,
    private router: Router
  ) { }
  setPage(i, event:any){
    event.preventDefault();
    this.pageNo = i;
    this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers(this.pageNo).
    subscribe(
      data=> {
        console.log(data);
        this.users=data['content'];
        this.pages= new Array(data['totalPages']);
      
      },
      (error)=> {
        console.log(error.error.message)
      }
    );
  }
}
