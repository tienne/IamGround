import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import {LocationService} from '../../shared/location/location.service';

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
  @ViewChild('sideNav') private sideNav: MdSidenav;
  url;

  constructor(
    private router: Router,
    private location: LocationService
  ) {
    this.themeName = 'iam-app-orange';
    // 라우터 변경 완료 시
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((routeChange: NavigationEnd) => {
        this.url = routeChange.url;
        console.log(`route change ${routeChange} isNavOver: ${this.isNavOver()}`);
        if (this.isNavOver()) {
          this.sideNav.close();
        }
      });

    // router.events
    //   .filter(event => event instanceof NavigationStart)
    //   .subscribe((routeChange: NavigationStart) => {
    //     console.log(`route change start`);
    //   });
    //
    // this.location.currentPath.subscribe(path => {
    //   console.log(`경로 변경 ${path}`);
    // });
  }

  ngOnInit() {
  }

  isNavOver() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}
