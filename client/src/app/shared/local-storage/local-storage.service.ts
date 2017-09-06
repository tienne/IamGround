import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  store(key: string, val): boolean {
    try {
      if ( typeof val !== 'string' && typeof val !== 'number') {
        val = JSON.stringify(val);
      }
      window.localStorage[key] = val;
      return true;
    } catch (e) {
      return false;
    }
  }

  clear(key: string) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  }

  getStore(key: string) {
    try {
      return window.localStorage[key] || null;
    } catch (e) {
      return null;
    }
  }

  getObject(key: string) {
    const obj = this.getStore(key);
    try {
      return JSON.parse(obj) || null;
    } catch (e) {
      return null;
    }
  }
}
