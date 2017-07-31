import { CommonModule } from '@angular/common';
// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { ToolbarComponent } from './toolbar/toolbar.component';

export const SHARED_MODULES: any = [
  CommonModule,
  TranslateModule
];

export const COMPONENT_DECLARATIONS: any[] = [
  ToolbarComponent,
];

export const COMPONENT_EXPORTS: any[] = [
  ToolbarComponent
];
