// vendor dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// app
import { MaterialComponentsModule } from '../common/material-components.module';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// app module
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [
    MaterialComponentsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    TranslateModule,
    ThemeModule
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
