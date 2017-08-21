import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ThemeStorageService {

  static storageKey = 'app-theme';

  public onThemeUpdate: EventEmitter<ITheme> = new EventEmitter<ITheme>();

  public storeTheme(theme: ITheme) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = JSON.stringify(theme);
    } catch (e) { }

    this.onThemeUpdate.emit(theme);
  }

  public getStoredTheme(): ITheme {
    try {
      return JSON.parse(window.localStorage[ThemeStorageService.storageKey] || null);
    } catch (e) {
      return null;
    }
  }

  public clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.storageKey);
    } catch (e) { }
  }
}

export interface ITheme {
  href: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}
