import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一: 吃饭',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatar1'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar2'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三: 打豆豆',
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar3'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 3,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务二：睡觉',
          owner: {
            id: 1,
            name: '李磊',
            avatar: 'avatar4'
          },
          dueDate: new Date()
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
