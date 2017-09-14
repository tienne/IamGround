import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import {TranslateService} from '@ngx-translate/core';
import { LanguageCode, Language } from './language';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class I18nService {

  STORAGE_KEY = 'app-language';
  currentLangCode: LanguageCode;
  // 현재 사용중인 언어 옵저블
  currentSubject: ReplaySubject<LanguageCode> = new ReplaySubject();
  currentLang$ = this.currentSubject.asObservable();

  private _langs: Language[] = [
    {
      code: 'ko',
      title: '한국어'
    },
    {
      code: 'en',
      title: 'English'
    }
  ];

  // 다국어 객체 옵저블
  langsSubject: BehaviorSubject<Language[]> = new BehaviorSubject(this._langs);
  langs$: Observable<Language[]> = this.langsSubject.asObservable();

  constructor(
    private _translate: TranslateService,
    private _storage: LocalStorageService
  ) {
    if (!this.currentLangCode) {
      const currentLang: LanguageCode = this.getStore() || 'en';
      this.currentLangCode = currentLang;
      this.currentSubject.next(this.currentLangCode);
      this._translate.setDefaultLang(this.currentLangCode);
    }
  }

  /**
   * 언어변경
   * @param {LanguageCode} langCode
   */
  changeLang(langCode: LanguageCode) {
    this._translate.use(langCode);
    this.currentLangCode = langCode;
    this.currentSubject.next(langCode);

    this._storage.store(this.STORAGE_KEY, langCode);
  }

  /**
   * 로컬스토리지에서 언어 선택 값을 가져온다.
   * @returns {LanguageCode}
   */
  private getStore(): LanguageCode {
    return this._storage.getStore(this.STORAGE_KEY);
  }

  /**
   * 경로에 해당하는 다국어 메세지를 가져옵니다.
   * @param {string} path
   * @returns {string}
   */
  getMessage(path: string) {
    return this._translate.stream(path);
  }
}
