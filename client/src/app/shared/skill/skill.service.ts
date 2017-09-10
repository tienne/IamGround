import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ISkill } from './skill.model';
export { ISkill } from './skill.model';

@Injectable()
export class SkillService {

  // techs$: FirebaseListObservable<ISkill[]>;
  constructor(private db: AngularFireDatabase) {
    // this.techs$ = this.db.list('techs');
  }

  getAllSkill(): FirebaseListObservable<ISkill[]> {
    return this.db.list('skills', {
      query: { orderByChild: 'order'}
    });
  }

  /**
   * 스킬의 로고 경로를 가져옵니다.
   * @param {ISkill} skill
   * @returns {string}
   */
  getSkillLogo(skill: ISkill) {
    return `assets/images/tech-logos/${skill.name}.png`;
  }
}
