import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireOfflineDatabase } from 'angularfire2-offline';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {MdSnackBar} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {I18nService} from '../i18n/i18n.service';

@Injectable()
export class AuthService {
  authDenyMsg;
  logoutMsg;

  authState: any = null;
  fetching$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireOfflineDatabase,
    private router: Router,
    private snackBar: MdSnackBar,
    private i18n: I18nService
  ) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });

    this.i18n.getMessage('auth.logoutMsg')
      .subscribe((msg) => {
        this.logoutMsg = msg;
      });

    this.i18n.getMessage('auth.authDeny')
      .subscribe((msg) => {
        this.authDenyMsg = msg;
      });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  emailLogin(email: string, password: string) {
    this.fetching$.next(true);
    const login = this.afAuth.auth.signInWithEmailAndPassword(email, password);
    const login$ = Observable.fromPromise(login);
    return login$.do((user) => {
      this.authState = user;
      this.updateUserData();
    });
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.snackBar.open(this.logoutMsg, '', {duration: 2000});
  }

  private updateUserData(): void {

    const path = `users/${this.currentUserId}`;
    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    };

    this.db.object(path)
      .update(data)
      .catch(error => console.log(error));

  }

}
