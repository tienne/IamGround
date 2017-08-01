// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { ResumeComponent} from './components/resume/resume.component';

export const SHARED_MODULES: any[] = [
  TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
  ResumeComponent
];
