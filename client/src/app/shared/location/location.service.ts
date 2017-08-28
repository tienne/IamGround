import { Injectable } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class LocationService {
  private urlSubject = new ReplaySubject<string>(1);

  currentUrl = this.urlSubject
    .map(url => this.stripSlashes(url));

  currentPath = this.currentUrl
    .map(url => url.match(/[^?#]*/)[0]);  // strip query and hash

  // 생성자
  constructor(
    private location: Location
  ) {
    this.urlSubject.next(location.path(true));
    // 로케이션이 변경될때마다 urlSubject 전달
    this.location.subscribe(state => {
      console.log(state);
      return this.urlSubject.next(state.url);
    });
  }
  // private
  private stripSlashes(url: string) {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  }

}
