import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {StyleManagerService} from '../style-manager/style-manager.service';
import { ITheme } from './theme.model';
export { ITheme } from './theme.model';

@Injectable()
export class ThemeService {
  STORAGE_KEY = 'app-theme';
  STYLE_KEY = 'theme';
  STYLE_PATH = 'assets/styles/app-';

  private currentTheme: ITheme;
  currentThemeSubject: ReplaySubject<ITheme> = new ReplaySubject();
  currentTheme$ = this.currentThemeSubject.asObservable();

  private _themes: ITheme[] = [
    {
      primary: '#e91e63',
      accent: '#607d8b',
      href: 'dark-pink.css',
      isDark: true,
      isDefault: true,
    },
    {
      primary: '#00bcd4',
      accent: '#ff5722',
      href: 'dark-cyan.css',
      isDark: true
    },
    {
      primary: '#009688',
      accent: '#607d8b',
      href: 'teal.css',
      isDark: false
    },
    {
      primary: '#607D8B',
      accent: '#536DFE',
      href: 'bluegrey.css',
      isDark: false
    }
  ];

  // 테마 리스트 옵저블
  themesSubject: BehaviorSubject<ITheme[]> = new BehaviorSubject(this._themes);
  themes$: Observable<ITheme[]> = this.themesSubject.asObservable();

  constructor(
    private _storage: LocalStorageService,
    private _styleManager: StyleManagerService
  ) {
    if (!this.currentTheme) {
      const currentTheme = this.getStore();

      if (currentTheme) {
        this.installTheme(currentTheme);
      }
    }
  }

  /**
   * 로컬스토리지에 저장된 테마를 가져온다.
   * @returns {ITheme}
   */
  private getStore(): ITheme | null {
    return this._storage.getObject(this.STORAGE_KEY);
  }

  /**
   * 테마 href 경로 가져온다.
   * @param {ITheme} theme
   * @returns {string}
   */
  private getStylePath(theme: ITheme) {
    return `${this.STYLE_PATH}${theme.href}`;
  }

  /**
   * 현재 테마 변경 처리
   * @param {ITheme} theme
   */
  currentNext(theme: ITheme) {
    this.currentTheme = theme;
    this.currentThemeSubject.next(theme);
  }

  /**
   * 테마 변경
   * @param {ITheme} theme
   */
  installTheme(theme: ITheme) {
    this.currentNext(theme);

    if (theme.isDefault) {
      this._styleManager.removeStyle(this.STYLE_KEY);
    } else {
      this._styleManager.setStyle(this.STYLE_KEY, this.getStylePath(theme));
    }

    if (this.currentTheme) {
      this._storage.store(this.STORAGE_KEY, this.currentTheme);
    }
  }

}
