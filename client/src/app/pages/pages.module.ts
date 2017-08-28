import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IamComponent } from './iam/iam.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [ IamComponent, TestComponent ]
})
export class PagesModule { }
