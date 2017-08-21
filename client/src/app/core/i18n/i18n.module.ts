import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from './i18n.service';
import { I18nStorageService } from './i18n-storage/i18n-storage.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [],
  providers: [
    I18nStorageService,
    I18nService
  ]
})
export class I18nModule { }
