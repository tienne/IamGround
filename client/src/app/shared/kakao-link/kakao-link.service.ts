import { Injectable, Optional } from '@angular/core';
import { KakaoLinkConfig } from './kakao-link-config';

@Injectable()
export class KakaoLinkService {
  private _kakao;

  constructor(@Optional() config: KakaoLinkConfig) {
    this.loadKakaoLinkScript(config);
  }

  private loadKakaoLinkScript(config: KakaoLinkConfig) {

  }
}
