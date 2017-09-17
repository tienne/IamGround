import { TestBed, inject } from '@angular/core/testing';

import { KakaoLinkService } from './kakao-link.service';

describe('KakaoLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KakaoLinkService]
    });
  });

  it('should be created', inject([KakaoLinkService], (service: KakaoLinkService) => {
    expect(service).toBeTruthy();
  }));
});
