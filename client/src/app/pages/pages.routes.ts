import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

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
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'interests',
    loadChildren: 'app/pages/interests/interests.module#InterestsModule'
  },
  {
    path: 'utils',
    loadChildren: 'app/pages/utils/utils.module#UtilsModule'
  }
];