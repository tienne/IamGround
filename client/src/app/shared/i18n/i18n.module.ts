import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {I18nPipe} from './i18n.pipe';
import {I18nService} from './i18n.service';
import {FirebaseTransLoader} from './firebase-trans-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AngularFireOfflineDatabase} from 'angularfire2-offline';

export function FbTransLoaderFactory(db: AngularFireOfflineDatabase) {
  return new FirebaseTransLoader(db);
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: FbTransLoaderFactory, deps: [AngularFireOfflineDatabase] }
    })
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
