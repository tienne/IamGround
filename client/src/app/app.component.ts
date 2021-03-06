import {Component, OnInit} from '@angular/core';
import {I18nService} from './shared/i18n/i18n.service';
// import {ThemeService} from './shared/theme/theme.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2';
import {NgServiceWorker} from '@angular/service-worker';
// import {KakaoLinkService} from './shared/kakao-link/kakao-link.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // 생성자
  constructor(
    public ga: Angulartics2GoogleAnalytics,
    private _i18n: I18nService,
    // private _theme: ThemeService,
    private _sw: NgServiceWorker
    // private _kakao: KakaoLinkService
  ) {}

  ngOnInit () {
    // this._sw.updates.subscribe((event) => {
    //   console.log(event);
    //   if (event.type === 'pending') {
    //     // Ask user if they want to update?
    //     this._sw.activateUpdate(event.version);
    //   } else {
    //     // event.type === 'activation'
    //     // NGSW is now serving a new version
    //     location.reload();
    //   }
    // });
  }
}
