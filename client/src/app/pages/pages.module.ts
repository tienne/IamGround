// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// app
import { PagesRoutingModule } from './pages-routing.module';
// pages component
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ProjectsComponent,
    ContactComponent,
  ]
})
export class PagesModule { }
