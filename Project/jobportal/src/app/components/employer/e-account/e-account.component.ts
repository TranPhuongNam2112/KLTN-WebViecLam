import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-e-account',
  templateUrl: './e-account.component.html',
  styleUrls: ['./e-account.component.scss']
})
export class EAccountComponent implements OnInit {
  model: NgbDateStruct;
  url = '';
 
  constructor() { }

  ngOnInit(): void {
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
      }
    }
  }

}
