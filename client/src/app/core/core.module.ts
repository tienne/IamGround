// vendor dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
// app
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MaterialComponentsModule } from '../common/material-components.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    MaterialComponentsModule,
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    ToolbarComponent,
    LayoutComponent,
    SidenavComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
