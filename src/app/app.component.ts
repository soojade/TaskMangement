import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private oc: OverlayContainer) {
  }
  isDarkTheme = false;
  switchTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    // 由于dialog和menu浮动在所有图层之上,切换主题不受影响,需额外设置
    this.oc.getContainerElement().className = this.isDarkTheme ? 'dark-theme' : null;
  }
}