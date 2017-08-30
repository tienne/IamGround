import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestsRoutingModule } from './interests-routing.module';
import { InterestListComponent } from './interest-list/interest-list.component';
import { InterestAddComponent } from './interest-add/interest-add.component';

@NgModule({
  imports: [
    CommonModule,
    InterestsRoutingModule
  ],
  declarations: [InterestListComponent, InterestAddComponent]
})
export class InterestsModule { }
