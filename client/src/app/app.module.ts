import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { environment } from '../environments/environment';
// import {ServiceWorkerModule} from '@angular/service-worker';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// core 부분
import {CoreModule} from './core/core.module';
import {PagesModule} from './pages/pages.module';
import {SkillService} from './shared/skill/skill.service';
import {StyleManagerService} from './shared/style-manager/style-manager.service';
// import {ThemeService} from './shared/theme/theme.service';
import {I18nModule} from './shared/i18n/i18n.module';
import {ProjectService} from './shared/project/project.service';
import {TagsService} from './shared/tags/tags.service';
import {AuthService} from './shared/auth/auth.service';
import {AuthGuard} from './shared/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
    AngularFireAuthModule,
    AppRoutingModule,
    I18nModule,
    // ServiceWorkerModule
  ],
  providers: [
    SkillService,
    ProjectService,
    // ThemeService,
    TagsService,
    StyleManagerService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
