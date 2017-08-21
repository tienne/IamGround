import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  // 퀵패널 영역
  @Input('quickpanel') quickpanel: any;
  @Input('sidenav') sidenav: any;
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

  constructor() {}

  ngOnInit() {

  }
  /**
   *  사이드 메뉴 토글 처리
   */
  toggleSidenav() {
    this.sidenav.toggle();
  }
  setLang() {}
}
