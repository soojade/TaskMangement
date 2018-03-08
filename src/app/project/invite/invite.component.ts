import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  options = [
    {
      id: 1,
      name: '张三'
    }, {
      id: 2,
      name: '李四'
    },
    {
      id: 3,
      name: '王五'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  // 使用 displayWith 动态处理需要显示的数据
  displayUser(user?: User) {
    return user ? user.name : '';
  }
}
