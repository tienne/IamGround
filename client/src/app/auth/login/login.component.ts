import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSnackBar, MdButton } from '@angular/material';
import { AuthService } from '../../shared/auth/auth.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {I18nService} from '../../shared/i18n/i18n.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(MdButton) submitButton: MdButton;
  @ViewChild(NgForm) loginForm: NgForm;
  loginData = {
    username: '',
    password: ''
  };
  constructor(
    private auth: AuthService,
    private mdSnackBar: MdSnackBar,
    private router: Router,
    private i18n: I18nService
  ) { }

  ngOnInit() {
    if (this.auth.authState) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.submitButton.disabled = true;
    const loginMsg$ = this.i18n.getMessage('auth.loginMsg');
    this.auth.emailLogin(this.loginForm.value['email'], this.loginForm.value['password'])
      .combineLatest(loginMsg$, (user, msg) => {
        user.welcome = `${user.email} ${msg}`;
        return user;
      })
      .catch((error) => Observable.of(error))
      .do(() => this.auth.fetching$.next(false))
      .take(1)
      .subscribe((user) => {
        if (user.email) {
          this.mdSnackBar.open(user.welcome, '', { duration: 2000 });
          this.router.navigateByUrl('/');
        } else {
          this.submitButton.disabled = false;
          this.mdSnackBar.open(user);
        }
      });
  }

}
