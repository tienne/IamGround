import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FirebaseTransLoader } from './shared/i18n/firebase-trans-loader';
import { environment } from '../environments/environment';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// core 부분
import {CoreModule} from './core/core.module';
import {PagesModule} from './pages/pages.module';
import {SkillService} from './shared/skill/skill.service';
import {StyleManagerService} from './shared/style-manager/style-manager.service';
import {ThemeService} from './shared/theme/theme.service';

export function FbTransLoaderFactory(db: AngularFireDatabase) {
  return new FirebaseTransLoader(db);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: FbTransLoaderFactory, deps: [AngularFireDatabase] }
    })
  ],
  providers: [
    SkillService,
    ThemeService,
    StyleManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
