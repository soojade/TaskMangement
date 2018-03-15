import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h3 mat-dialog-title>{{title}}</h3>
    <div mat-dialog-content>{{content}}</div>
    <div mat-dialog-actions>
      <button type="button" mat-raised-button color="primary" (click)="onClick(true)">确认</button>
      <button type="button" mat-raised-button color="accent" (click)="onClick(true)">取消</button>
    </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  onClick(result: boolean) {
    this.dialogRef.close(result);
  }
}
