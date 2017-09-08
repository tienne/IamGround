import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ISkill } from './skill.model';
export { ISkill } from './skill.model';

@Injectable()
export class SkillService {

  techs$: FirebaseListObservable<ISkill[]>;
  constructor(private db: AngularFireDatabase) {
    this.techs$ = this.db.list('techs');
  }

  getAllSkill() {
    return this.db.list('techs');
  }

}
