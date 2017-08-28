import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, AuthComponent]
})
export class AuthModule { }
