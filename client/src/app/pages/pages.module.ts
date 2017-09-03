// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../common/material-components.module';
// app
import { PagesRoutingModule } from './pages-routing.module';
// pages component
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { TechStackComponent } from './profile/tech-stack/tech-stack.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule
    // PagesRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ProjectsComponent,
    ContactComponent,
    TechStackComponent,
  ]
})
export class PagesModule { }
