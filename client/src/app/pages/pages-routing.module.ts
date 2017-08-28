import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IamComponent } from './iam/iam.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'iam'
  },
  {
    path: 'iam',
    component: IamComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
