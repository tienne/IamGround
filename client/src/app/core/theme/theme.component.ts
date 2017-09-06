import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {ThemeService, ITheme} from '../../shared/theme/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit {
  currentTheme: ITheme;
  themes: ITheme[];

  constructor(private _themeService: ThemeService) {}
  ngOnInit() {
    this._themeService.currentTheme$.subscribe(theme => this.currentTheme = theme);
    this._themeService.themes$.subscribe(themes => this.themes = themes);
  }

  installTheme(theme: ITheme) {
    this._themeService.installTheme(theme);
  }

}
