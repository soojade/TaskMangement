import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  avatars: string[] = [];
  ngOnInit() {
    for (let i = 1; i <= 7; i++) {
      this.avatars.push(`avatar${i}`);
    }
  }

}
