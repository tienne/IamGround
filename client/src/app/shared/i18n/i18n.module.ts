import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {I18nPipe} from './i18n.pipe';
import {I18nService} from './i18n.service';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    I18nPipe,
  ],
  providers: [
    I18nService,
  ],
  exports: [
    TranslateModule,
    I18nPipe,
  ]
})
export class I18nModule { }
