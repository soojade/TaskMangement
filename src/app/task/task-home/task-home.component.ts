import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

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
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatar1'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 1,
          desc: '任务三: 打豆豆,巴啦啦吧,没完没了,点点滴滴',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar3'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务三: 打豆豆,巴啦啦吧,没完没了,点点滴滴',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar3'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 1,
          desc: '任务三: 打豆豆,巴啦啦吧,没完没了,点点滴滴',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar3'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar2'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar2'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务三: 打豆豆,巴啦啦吧,没完没了,点点滴滴',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar3'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          completed: false,
          priority: 2,
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
          desc: '任务三: 打豆豆,巴啦啦吧,没完没了,点点滴滴',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatar3'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar2'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          completed: false,
          priority: 2,
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
      id: 3,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务二：睡觉',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '李磊',
            avatar: 'avatar4'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二: 睡觉',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar2'
          },
          dueDate: new Date()
        }, {
          id: 2,
          desc: '任务二: 睡觉',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatar2'
          },
          dueDate: new Date()
        }
      ]
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openNewTaskDialog() {
    this.dialog.open(NewTaskComponent, { data: { title: '新建任务' } });
  }
  openCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } }); // 通过dialog传递数据
  }
  openUpdateTaskDIalog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '修改任务', task: task } });
  }
  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除列表', content: '确认要删除本列表吗?' } });
  }
  openEditDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '修改列表名称' } });
  }
  addList() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '新建列表' } });
  }
}
