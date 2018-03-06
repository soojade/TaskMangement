import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: []
})

// 共享模块,将通用的模块导入并导出
export class SharedModule { }
