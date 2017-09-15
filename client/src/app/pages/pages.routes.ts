import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import {AuthGuard} from '../shared/auth/auth.guard';

export const PageRoutes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    // resolve: {
    //   projects: ProjectResolver
    // }
  },
  {
    path: 'projects/:project',
    component: ProjectDetailComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'interests',
    loadChildren: 'app/pages/interests/interests.module#InterestsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'utils',
    loadChildren: 'app/pages/utils/utils.module#UtilsModule',
    canActivate: [AuthGuard]
  }
];