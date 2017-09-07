// vendor dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
// app
import { MaterialComponentsModule } from '../common/material-components.module';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { I18nComponent } from './i18n/i18n.component';
// app module
import { LocationService } from '../shared/location/location.service';
import { SidenavService } from './sidenav/sidenav.service';
import { SidenavItemDirective } from './sidenav/sidenav-item.directive';
import {LocalStorageService} from '../shared/local-storage/local-storage.service';
import {ThemeComponent} from './theme/theme.component';
import {I18nModule} from '../shared/i18n/i18n.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    RouterModule,
    I18nModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  declarations: [
    ToolbarComponent,
    LayoutComponent,
    SidenavComponent,
    NotFoundComponent,
    SidenavItemComponent,
    I18nComponent,
    SidenavItemDirective,
    ThemeComponent
  ],
  exports: [],
  providers: [
    LocationService,
    SidenavService,
    LocalStorageService
  ]
})
export class CoreModule { }
