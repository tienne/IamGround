import { Injectable, Optional } from '@angular/core';
import {KakaoLinkConfig, KakaoSdkType} from './kakao-link-config';
import {AsyncSubject} from 'rxjs/AsyncSubject';
import {Observable} from 'rxjs/Observable';
import {WindowRef} from '../window-ref';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/take';
import {MdSnackBar} from '@angular/material';
import {environment} from '../../../environments/environment';

@Injectable()
export class KakaoLinkService {
  private _kakao;
  private loadSubject: AsyncSubject<boolean> = new AsyncSubject();
  private load$: Observable<boolean> = this.loadSubject.asObservable();
  private _window;

  constructor(
    @Optional() private config: KakaoLinkConfig,
    _window: WindowRef,
    private _snackBar: MdSnackBar
  ) {
    this._window = _window.nativeWindow;
    this.kakaoLoad();

    this.load$.take(1).subscribe(() => {
      this._kakao = this._window.Kakao;
      if (!this._kakao.API) {
        this._kakao.init(this.config.key);
      }
    });
  }

  private kakaoLoad() {
    if (!this._window.Kakao) {
      let kakaoScript = false;
      const scripts = this._window.document.querySelectorAll('script[src]');
      const match = this.config.sdkType === KakaoSdkType.cdn ? /developers\.kakao\.com\/sdk\/js\/kakao/ : new RegExp(this.config.path);

      scripts.forEach(script => {
        if (match.test(script.src)) {
          kakaoScript = true;
        }
      });

      if (!kakaoScript) {
        const loadScript$ = this.loadKakaoLinkScript();
        this.load$ = this.load$.combineLatest(loadScript$);
      }
    }

    this.loadSubject.next(true);
    this.loadSubject.complete();
  }
  private loadKakaoLinkScript() {
    let scriptLoad$;
    const sdkUrl = this.config.sdkType === KakaoSdkType.cdn ? '//developers.kakao.com/sdk/js/kakao.min.js' : this.config.path,
      script = this._window.document.createElement('script'),
      firstScript = this._window.document.getElementsByTagName('script')[0];

    script.src = sdkUrl;
    script.async = true;
    scriptLoad$ = Observable.fromEvent(script, 'load');

    firstScript.parentNode.insertBefore(script, firstScript);
    return scriptLoad$;
  }

  sendLinkDefault() {
    if (this._window.orientation !== undefined || !environment.production) {
      this._kakao.Link.sendTalkLink({
        label : '개발자 권윤학 - I am Ground 자기소개하기',
        image: {
          src: 'https://tienne.github.io/assets/images/avatar.png',
          width: 90,
          height : 90
        },
        webButton: {
          text: '웹으로 보기',
          url: 'https://tienne.github.io'
        }
      });
    } else {
      this._snackBar.open('모바일 디바이스에서만 가능합니다.', '', {duration: 2000});
    }
  }
}
