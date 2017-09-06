import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';

export class FirebaseTransLoader implements TranslateLoader {
  constructor(private db: AngularFireDatabase) {}
  public getTranslation(lang: string, prefix: string = 'translations/'): any {
    return this.db.object(`${prefix}${lang}`) as Observable<any>;
  }
}
