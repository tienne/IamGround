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
// app module
import { ThemeModule } from './theme/theme.module';
import { I18nModule } from './i18n/i18n.module';
import { LocationService } from '../shared/location/location.service';
import { SidenavService } from './sidenav/sidenav.service';
import { SidenavItemDirective } from './sidenav/sidenav-item.directive';


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
    ThemeModule,
    I18nModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  declarations: [
    ToolbarComponent,
    LayoutComponent,
    SidenavComponent,
    NotFoundComponent,
    SidenavItemComponent,
    SidenavItemDirective
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    LocationService,
    SidenavService
  ]
})
export class CoreModule { }
