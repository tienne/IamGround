import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';
import { ResumeRoutes } from './resume.routes';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './resume.common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(<any>ResumeRoutes),
    ...SHARED_MODULES
  ],
  declarations: [...COMPONENT_DECLARATIONS]
})
export class ResumeModule { }
