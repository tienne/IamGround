import { Component, Input, OnInit } from '@angular/core';
import { WindowRef } from '../../shared/window-ref';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  // 퀵패널 영역
  @Input('quickpanel') quickpanel: any;
  @Input('sidenav') sidenav: any;
  isWebApp: boolean;
  currentLang = 'ko';
  availableLangs = [
    {
      name: '한국어',
      code: 'ko'
    },
    {
      name: 'English',
      code: 'en',
    }
  ];

  constructor(private _window: WindowRef) {}

  ngOnInit() {
    this.isWebApp = this._window.nativeWindow.matchMedia('(display-mode: standalone)').matches;
  }
  /**
   *  사이드 메뉴 토글 처리
   */
  toggleSidenav() {
    this.sidenav.toggle();
  }
  setLang() {}
}
