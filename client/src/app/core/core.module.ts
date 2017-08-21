// vendor dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// app
import { MaterialComponentsModule } from '../common/material-components.module';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// app module
import { ThemeModule } from './theme/theme.module';
import { I18nModule } from './i18n/i18n.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
    ThemeModule,
    I18nModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  declarations: [
    ToolbarComponent,
    LayoutComponent,
    SidenavComponent
  ],
  exports: [
    LayoutComponent
  ],
})
export class CoreModule { }
