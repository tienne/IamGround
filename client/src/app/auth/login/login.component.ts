import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSnackBar, MdButton } from '@angular/material';
import { AuthService } from '../../shared/auth/auth.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.authState) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.submitButton.disabled = true;
    this.auth.emailLogin(this.loginForm.value['email'], this.loginForm.value['password'])
      .take(1)
      .do(() => this.auth.fetching$.next(false))
      .subscribe((user) => {
        this.mdSnackBar.open(`${user.email}님 환영합니다.`, '', { duration: 2000 });
        this.router.navigateByUrl('/');
      });
  }

}
