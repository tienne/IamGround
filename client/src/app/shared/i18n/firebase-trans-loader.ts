import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireOfflineDatabase} from 'angularfire2-offline';

export class FirebaseTransLoader implements TranslateLoader {
  constructor(private db: AngularFireOfflineDatabase) {}
  public getTranslation(lang: string, prefix: string = 'translations/'): any {
    return this.db.object(`${prefix}${lang}`) as Observable<any>;
  }
}
