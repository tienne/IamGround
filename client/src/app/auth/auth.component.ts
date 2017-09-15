import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../shared/auth/auth.service';
import {MdProgressBar} from '@angular/material';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  fetching$: Observable<boolean> = this.auth.fetching$;
  @ViewChild(MdProgressBar) fetch: MdProgressBar;
  alive = true;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.fetching$
      .takeWhile(() => this.alive)
      .subscribe(fetch => {
        this.fetch.mode = fetch ? 'indeterminate' : 'determinate';
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
