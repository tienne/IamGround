import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RoutesRecognized } from '@angular/router';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import {LocationService} from '../../shared/location/location.service';
import {KakaoLinkService} from '../../shared/kakao-link/kakao-link.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isFetching$: Observable<boolean>;
  color = 'primary';
  // 퀵패널 노출여부
  quickpanelOpen = false;
  // 사이드 메뉴
  @ViewChild('sideNav') private sideNav: MdSidenav;
  url;

  constructor(
    private router: Router,
    private location: LocationService
  ) {
    this.isFetching$ = this.router.events
      .map(event => {
        return !(event instanceof NavigationEnd);
      });
  }

  ngOnInit() {
    // 라우터 변경 완료 시
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((routeChange: NavigationEnd) => {
        this.url = routeChange.url;

        if (this.isNavOver()) {
          this.sideNav.close();
        }
      });
  }

  isNavOver() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}
