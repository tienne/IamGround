import {Component, OnDestroy, OnInit} from '@angular/core';
import {I18nService} from '../../shared/i18n/i18n.service';
import {Language, LanguageCode} from '../../shared/i18n/language';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss']
})
export class I18nComponent implements OnInit, OnDestroy {
  langs: Language[];
  langsSubscription: Subscription;

  currentLang: LanguageCode;
  currentLangSubscription: Subscription;

  constructor(
    private _i18n: I18nService
  ) {}

  ngOnInit() {
    this.langsSubscription = this._i18n.langs$.subscribe(langs => this.langs = langs);
    this.currentLangSubscription = this._i18n.currentLang$.subscribe(code => this.currentLang = code);
  }

  changeLang(langCode: LanguageCode) {
    this._i18n.changeLang(langCode);
  }

  ngOnDestroy() {
    this.langsSubscription.unsubscribe();
    this.currentLangSubscription.unsubscribe();
  }

}
