import { NgModule } from '@angular/core';
import {KakaoLinkService} from './kakao-link.service';
import {KakaoLinkConfig} from './kakao-link-config';

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  exports: []
})
export class KakaoLinkModule {
  static forRoot(config: KakaoLinkConfig) {
    return {
      ngModule: KakaoLinkModule,
      providers: [
        {provide: KakaoLinkConfig, useValue: config },
        KakaoLinkService
      ]
    };
  }
}
