import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

// 为了避免icon注册表重复加载,图标分散难以管理,将icon加载放到一起统一编写,然后在module中导入,进行初始化
export const loadSvgResources = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
    iconRegistry.addSvgIcon(
        'people',
        sanitizer.bypassSecurityTrustResourceUrl('assets/ic_people_black.svg')
    );
}