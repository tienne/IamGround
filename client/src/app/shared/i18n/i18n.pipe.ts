import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import { I18nService } from './i18n.service';
import {ITranslate} from './language';
import {Subscription} from 'rxjs/Subscription';

@Pipe({
  name: 'i18n',
  pure: false
})
export class I18nPipe implements PipeTransform, OnDestroy {
  currentLang;
  currentLangSubscription: Subscription;

  constructor(private i18nService: I18nService) {
    this.currentLangSubscription = this.i18nService.currentLang$.subscribe((lang) => this.currentLang = lang);
  }
  transform(value: ITranslate, args?: any): any {
    try {
      return value[this.currentLang];
    } catch (e) {
      return '';
    }
  }

  ngOnDestroy() {
    this.currentLangSubscription.unsubscribe();
  }

}
