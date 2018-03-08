import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    private oc: OverlayContainer
  ) { }

  ngOnInit() {
    // 由于对话框浮动在所有图层之上,切换黑夜模式不受影响,需额外设置
    if (this.data.isDarkTheme) {
      this.oc.getContainerElement().classList.add('dark-theme');
    }
  }
  save() {
    this.dialogRef.close('saving...'); // 对话框向调用者发送消息
  }
}
