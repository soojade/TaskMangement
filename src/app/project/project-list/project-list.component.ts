import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      "name": "协作平台",
      "desc": "内部项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "测试项目",
      "desc": "测试描述",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '新建项目' } }); // 获取对话框引用
    // dialogRef.afterClosed().subscribe(); // 订阅对话框引用可观察对象,使调用者接收对话框消息
  }
  openInviteDialog() {
    this.dialog.open(InviteComponent);
  }
  edit() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '编辑项目' } });
  }
  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除项目', content: '确认是否要删除?' } });
  }
}
