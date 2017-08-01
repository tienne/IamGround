import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  //퀵패널 노출여부
  quickpanelOpen: boolean = false;
  //
  sidenavOpen: boolean = true;
  sidenavMode: string = 'side';

  constructor() { }

  ngOnInit() {
  }

}
