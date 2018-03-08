import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectItemComponent, NewProjectComponent, InviteComponent],
  entryComponents: [NewProjectComponent, InviteComponent] // 作为对话框,要将组件放到 entryComponents 中,进行预加载
})
export class ProjectModule { }
