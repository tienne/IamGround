import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IamgroundComponent } from './iamground/iamground.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'who'
  },
  {
    path: 'who',
    component: IamgroundComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
