import {Injectable} from '@angular/core';
import { ITag } from './tag';
import {AfoListObservable, AfoObjectObservable, AngularFireOfflineDatabase} from 'angularfire2-offline';
export { ITag } from './tag';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/combineLatest';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TagsService {

  private _selectedTags: ITag[] = [];

  tags$: Observable<ITag[]>;

  constructor(
    private db: AngularFireOfflineDatabase
  ) {
    this.tags$ = this.findAllTags();
  }

  findAllTags(): Observable<ITag[]> {
    return this.db.list('tags')
      .map(tags => {
        tags = tags.map(tag => this.db.object(`tags/${tag.$key}`));
        return tags;
      }).switchMap(tags => Observable.combineLatest(tags));
  }

  setSelectedTags(tags: ITag[]) {
    if (this._selectedTags !== tags) {
      this._selectedTags = tags;
    }
  }
  getSelectedTags(): ITag[] {
    return this._selectedTags;
  }
}
