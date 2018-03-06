import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
  	CommonModule
  ],
  declarations: []
})

// 共享模块,将通用的模块导入并导出
export class SharedModule { }
