import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IamComponent } from './iam/iam.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iam'
  },
  {
    path: 'iam',
    component: IamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
