import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RoutesRecognized } from '@angular/router';
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
  isFetching$: Observable<boolean>;
  color = 'accent';
  // 퀵패널 노출여부
  quickpanelOpen = false;
  // 사이드 메뉴
  @ViewChild('sideNav') private sideNav: MdSidenav;
  url;

  constructor(
    private router: Router,
    private location: LocationService
  ) {}

  ngOnInit() {
    // 라우터 변경 완료 시
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((routeChange: NavigationEnd) => {
        this.url = routeChange.url;
        console.log(`route change ${routeChange} isNavOver: ${this.isNavOver()}`);
        if (this.isNavOver()) {
          this.sideNav.close();
        }
      });

    this.isFetching$ = this.router.events
      .map(event =>
        (event instanceof NavigationStart || event instanceof RoutesRecognized)
      );
  }

  isNavOver() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}
