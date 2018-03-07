import { Component, OnInit, Input } from '@angular/core';
import { getDate } from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  today = '1';
  ngOnInit() {
    this.today = `${getDate(new Date())}`;
  }
}
