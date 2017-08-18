import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('layout') layout;
  isFetching = false;
  // 퀵패널 노출여부
  quickpanelOpen = false;
  //
  sidenavOpen = true;
  sidenavMode = 'side';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.layout);
  }

}
