import { KakaoLinkModule } from './kakao-link.module';

describe('KakaoLinkModule', () => {
  let kakaoLinkModule: KakaoLinkModule;

  beforeEach(() => {
    kakaoLinkModule = new KakaoLinkModule();
  });

  it('should create an instance', () => {
    expect(kakaoLinkModule).toBeTruthy();
  });
});
