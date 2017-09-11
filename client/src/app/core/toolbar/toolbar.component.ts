import { Component, Input, OnInit } from '@angular/core';
import { WindowRef } from '../../shared/window-ref';
import { environment } from '../../../environments/environment';

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
  isProduction = environment.production;

  constructor(private _window: WindowRef) {}

  ngOnInit() {
    this.isWebApp = this._window.isWebApp();
  }
  /**
   *  사이드 메뉴 토글 처리
   */
  toggleSidenav() {
    this.sidenav.toggle();
  }
  setLang() {}
}
