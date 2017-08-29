import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IamgroundComponent } from './iamground/iamground.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    IamgroundComponent,
    ProjectsComponent,
    ContactComponent
  ]
})
export class PagesModule { }
