import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

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
  // 사이드 메뉴
  @ViewChild(MdSidenav) private sideNave: MdSidenav;
  url;

  constructor(private router: Router) {
    this.themeName = 'iam-app-dark-pink';
    router.events.filter(event => event instanceof NavigationEnd).subscribe((routeChange: NavigationEnd) => {
      this.url = routeChange.url;
      if (this.isNavOver()) {
        this.sideNave.close();
      }
    });
  }

  ngOnInit() {
  }

  isNavOver() {

    if (this.url === '/inbox') {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }
}
