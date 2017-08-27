import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'},
  { path: '', component: LayoutComponent, children: [
    {
      path: '',
      loadChildren: 'app/pages/pages.module#PagesModule'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ]}
];
