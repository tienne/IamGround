import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ProjectService} from './project.service';
import 'rxjs/add/operator/take';
import {IProject} from './project.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectResolver implements Resolve<IProject[]> {
  constructor(
    private _projectService: ProjectService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject[]> {
    return this._projectService.findAllProject().take(1);
  }
}

