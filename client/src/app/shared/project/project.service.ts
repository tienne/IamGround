import { Injectable } from '@angular/core';
import {AngularFireOfflineDatabase} from 'angularfire2-offline';
import {ISkill} from '../skill/skill.model';
import 'rxjs/add/operator/map';
import {IProject} from './project.model';
export {IProject} from './project.model';

@Injectable()
export class ProjectService {

  constructor(
    private db: AngularFireOfflineDatabase
  ) { }


  findAllProject() {
    return this.db.list('projects');
  }

  findProjectsBySkill (skill: ISkill) {
    return this.db.list('projects')
      .map((projects: IProject[]) => {
        return projects.filter((project) => project.skills.hasOwnProperty(skill.name))
          .sort((a, b) => Number(a.order > b.order));
      });
  }

  /**
   * 프로젝트 로고 이미지 경로를 가져옵니다.
   * @param {IProject} project
   * @returns {string}
   */
  getProjectLogo (project: IProject) {
    return `assets/images/projects/${project.name}.png`;
  }

}
