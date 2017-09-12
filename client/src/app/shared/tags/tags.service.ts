import { Injectable } from '@angular/core';
import { ITag } from './tag';
import {AngularFireOfflineDatabase} from 'angularfire2-offline';
import {Observable} from 'rxjs/Observable';
export { ITag } from './tag';

@Injectable()
export class TagsService {

  constructor(
    private db: AngularFireOfflineDatabase
  ) { }

  findAllTags(): Observable<ITag[]> {
    return this.db.list('tags');
  }
}
