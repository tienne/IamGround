import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  themeName: string;
  isFetching = false;
  // 퀵패널 노출여부
  quickpanelOpen = false;
  //
  sidenavOpen = true;
  sidenavMode = 'side';

  constructor(private overlay: OverlayContainer) {
    this.themeName = 'iam-app-dark-pink';
  }

  ngOnInit() {
  }
}
