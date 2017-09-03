import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  private _themes: Array<ITheme> = [
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

  constructor() { }

}

/**
 * 테마 인터페이스
 */
export interface ITheme {
  /**
   * 테마 파일 경로
   */
  href: string;
  /**
   * 강조 색상(컬러표값)
   */
  accent: string;
  /**
   * 기본 색상(컬러표값)
   */
  primary: string;
  /**
   * 다크테마 여부
   */
  isDark?: boolean;
  /**
   * 기본테마 여부
   */
  isDefault?: boolean;
}
