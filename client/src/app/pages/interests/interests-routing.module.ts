import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestListComponent } from './interest-list/interest-list.component';
import { InterestAddComponent } from './interest-add/interest-add.component';

const routes: Routes = [
  {
    path: '',
    component: InterestListComponent
  },
  {
    path: 'add',
    component: InterestAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestsRoutingModule { }
