import {Component, OnInit} from '@angular/core';
import {I18nService} from './shared/i18n/i18n.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // 생성자
  constructor(
    private _i18n: I18nService
  ) {}

  ngOnInit () {}
}
