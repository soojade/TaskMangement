import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { loadSvgResources } from '../utils/svg.util';
@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule
	],
	declarations: [HeaderComponent, FooterComponent, SidebarComponent],
	exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
	// 在构造函数中使用依赖注入,使本模块只加载一次
	constructor
		(@Optional() @SkipSelf() parent: CoreModule,
		iconRegistry: MatIconRegistry,
		sanitizer: DomSanitizer
		) { // @optinal()表示依赖使可选的; @skipself() 跳过本身,进入父级查找,避免死循环
		if (parent) {
			throw new Error('本模块只加载一次,不可重复加载');
		}
		loadSvgResources(iconRegistry, sanitizer);
	}
}
