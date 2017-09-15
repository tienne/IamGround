import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireOfflineDatabase } from 'angularfire2-offline';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {MdSnackBar} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  authState: any = null;
  fetching$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireOfflineDatabase,
    private router: Router,
    private snackBar: MdSnackBar
  ) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
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
    }).catch((error) => Observable.of(error));
  }

  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.snackBar.open('로그아웃 되었습니다.', '', {duration: 2000});
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
