import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageRoutes } from './pages.routes';

@NgModule({
  imports: [RouterModule.forChild(PageRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
