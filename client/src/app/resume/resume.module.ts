import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './resume.common';

@NgModule({
  imports: [
    CommonModule,
    ...SHARED_MODULES
  ],
  declarations: [...COMPONENT_DECLARATIONS]
})
export class ResumeModule { }
