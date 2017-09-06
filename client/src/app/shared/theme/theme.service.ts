import { Injectable } from '@angular/core';
import { ITheme } from './theme.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
export { ITheme } from './theme.model';

@Injectable()
export class ThemeService {
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
      primary: '#f6b26b',
      accent: '#607d8b',
      href: 'dark-orange.css',
      isDark: true
    },
    {
      primary: '#00bcd4',
      accent: '#ff5722',
      href: 'cyan.css',
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

  constructor() { }

}
