import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MaterialComponentsModule} from '../common/material-components.module';
import {FormsModule} from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [LoginComponent, AuthComponent]
})
export class AuthModule { }
