import { Injectable } from '@angular/core';
import { AngularFireOfflineDatabase, AfoListObservable } from 'angularfire2-offline';
import { ISkill } from './skill.model';
export { ISkill } from './skill.model';

@Injectable()
export class SkillService {

  // techs$: FirebaseListObservable<ISkill[]>;
  constructor(private db: AngularFireOfflineDatabase) {
    // this.techs$ = this.db.list('techs');
  }

  getAllSkill(): AfoListObservable<ISkill[]> {
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
