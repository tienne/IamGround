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

  constructor() {}

  ngOnInit() {

  }

}
