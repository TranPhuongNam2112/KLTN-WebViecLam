import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-sidebar',
  templateUrl: './c-sidebar.component.html',
  styleUrls: ['./c-sidebar.component.scss']
})
export class CSidebarComponent implements OnInit {
//navbar
active = 'top';
  constructor() { }

  ngOnInit(): void {
  }

}
