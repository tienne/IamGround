import { Injectable } from '@angular/core';
import {AngularFireOfflineDatabase} from 'angularfire2-offline';
import {ISkill} from '../skill/skill.model';
import 'rxjs/add/operator/map';
import {IProject} from './project.model';
import {ITag} from '../tags/tags.service';
import {Observable} from 'rxjs/Observable';
export {IProject} from './project.model';


@Injectable()
export class ProjectService {

  constructor(
    private db: AngularFireOfflineDatabase
  ) { }


  findAllProject(): Observable<IProject[]> {
    return this.db.list('projects', {
      query: { orderByChild: 'order' }
    });
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

  /**
   * 프로젝트 상세 화면 이미지 경로를 가져옵니다.
   * @param {IProject} project
   * @returns {string}
   */
  getProjectImage (project: IProject) {
    return `assets/images/projects/${project.name}/${project.name}_1.png`;
  }

}
