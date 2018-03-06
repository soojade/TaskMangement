import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { loadSvgResources } from '../utils/svg.util';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  // 在构造函数中使用依赖注入,使本模块只加载一次
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) { // @optinal()表示依赖使可选的; @skipself() 跳过本身,进入父级查找,避免死循环
    if (parent) {
      throw new Error('本模块只加载一次,不可重复加载');
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
