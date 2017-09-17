import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../shared/auth/auth.service';
import {MdProgressBar} from '@angular/material';
import 'rxjs/add/operator/takeWhile';
import {I18nService} from '../shared/i18n/i18n.service';

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
    private auth: AuthService,
    private _i18n: I18nService
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
