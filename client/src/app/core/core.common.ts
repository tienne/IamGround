import { CommonModule } from '@angular/common';
// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
// app
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const SHARED_MODULES: any = [
  CommonModule,
  RouterModule,
  TranslateModule
];

export const COMPONENT_DECLARATIONS: any[] = [
  ToolbarComponent,
  LayoutComponent
];

export const COMPONENT_EXPORTS: any[] = [
  LayoutComponent,
];
