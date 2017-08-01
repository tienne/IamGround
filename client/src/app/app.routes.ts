import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component'

/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [

  { path: '', component: LayoutComponent, children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'resume'
    },
    {
      path: 'resume',
      loadChildren: 'app/resume/resume.module#ResumeModule'
    }
  ]},
];
