// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { RouterModule} from '@angular/router';
import { ResumeRoutes } from './resume.routes';

import { ResumeComponent} from './components/resume/resume.component';

export const SHARED_MODULES: any[] = [
  RouterModule.forChild(<any>ResumeRoutes),
  TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
  ResumeComponent
];
