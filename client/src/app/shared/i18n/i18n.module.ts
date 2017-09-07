import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {I18nPipe} from './i18n.pipe';
import {I18nService} from './i18n.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseTransLoader} from './firebase-trans-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

export function FbTransLoaderFactory(db: AngularFireDatabase) {
  return new FirebaseTransLoader(db);
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: FbTransLoaderFactory, deps: [AngularFireDatabase] }
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
