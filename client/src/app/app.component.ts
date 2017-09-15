import {Component, OnInit} from '@angular/core';
import {I18nService} from './shared/i18n/i18n.service';
import {ThemeService} from './shared/theme/theme.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2';
import {AngularFireOfflineDatabase} from 'angularfire2-offline';

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
    private _theme: ThemeService
  ) {}

  ngOnInit () {
  }
}
