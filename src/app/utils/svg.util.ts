import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

// 为了避免icon注册表重复加载,图标分散难以管理,将icon加载放到一起统一编写,然后在module中导入,进行初始化
export const loadSvgResources = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
    const svgDir = 'assets/svg';
    const dayDir = `${svgDir}/days`;
    const avatarDir = `${svgDir}/avatar`;

    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/menu.svg`)
    );
    iconRegistry.addSvgIcon(
        'add',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/add.svg`)
    );
    iconRegistry.addSvgIcon(
        'invite',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/invite.svg`)
    );
    iconRegistry.addSvgIcon(
        'people',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/footer_people.svg`)
    );
    iconRegistry.addSvgIcon(
        'project',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/project.svg`)
    );
    iconRegistry.addSvgIcon(
        'month',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/month.svg`)
    );
    iconRegistry.addSvgIcon(
        'week',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/week.svg`)
    );
    iconRegistry.addSvgIcon(
        'day',
        sanitizer.bypassSecurityTrustResourceUrl(`${svgDir}/day.svg`)
    );

    // 使用循环加载日历的31个svg
    for (let i = 1; i <= 31; i++) {
        iconRegistry.addSvgIcon(
            `${i}`,
            sanitizer.bypassSecurityTrustResourceUrl(`${dayDir}/${i}.svg`)
        );
    }

    // 加载16个头像
    for (let i = 1; i <= 7; i++) {
        iconRegistry.addSvgIcon(
            `avatar${i}`,
            sanitizer.bypassSecurityTrustResourceUrl(`${avatarDir}/avatar${i}.svg`)
        );
    }
};
