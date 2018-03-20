import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../animations/router.animation';
import { listAnimation } from '../../animations/list.animation';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush // 禁止ng自动检查,只有外部状态发生变化时才检查
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      "id": 1,
      "name": "协作平台",
      "desc": "内部项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "id": 2,
      "name": "测试项目",
      "desc": "测试描述",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]

  @HostBinding('@routeAnimation') state;
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '新建项目' } }); // 获取对话框引用
    dialogRef.afterClosed().subscribe(() => {
      this.projects = [...this.projects, { 'id': 3, 'name': 'linshi', 'desc': 'hello', "coverImg": "assets/img/covers/1.jpg" }];
    }); // 订阅对话框引用可观察对象,使调用者接收对话框消息
  }

  openInviteDialog() {
    this.dialog.open(InviteComponent);
  }
  edit() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '编辑项目' } });
  }
  openConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除项目', content: '确认是否要删除?' } });
    dialogRef.afterClosed().subscribe(() => {
      this.projects = this.projects.filter(p => p.id != project.id);
    })
  }
}
