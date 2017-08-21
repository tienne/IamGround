import { TestBed, inject } from '@angular/core/testing';

import { I18nStorageService } from './i18n-storage.service';

describe('I18nStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nStorageService]
    });
  });

  it('should be created', inject([I18nStorageService], (service: I18nStorageService) => {
    expect(service).toBeTruthy();
  }));
});
