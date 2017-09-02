import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LayoutComponent } from './core/layout/layout.component';
import { PageRoutes } from './pages/pages.routes';

/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: LayoutComponent,
    children: PageRoutes
    // loadChildren: 'app/pages/pages.module#PagesModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
