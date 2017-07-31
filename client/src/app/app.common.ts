import { AppRoutingModule } from './app-routing.module';
// demo
import { CoreModule } from './core/core.module';

import { ResumeModule } from './resume/resume.module';

export const SHARED_MODULES: any[] = [
  AppRoutingModule,
  ResumeModule,
  CoreModule,
];

export * from './app-routing.module';
