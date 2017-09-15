import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar: MdSnackBar
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.authenticated) {
      return true;
    }

    this.snackBar.open('로그인 후 이용 가능합니다.', '', { duration: 2000});
    this.router.navigateByUrl('/auth/login');
    return true;
  }
}
