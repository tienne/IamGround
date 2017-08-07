import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // 퀵패널 노출여부
  quickpanelOpen = false;
  //
  sidenavOpen = true;
  sidenavMode = 'side';

  constructor() { }

  ngOnInit() {
  }

}
