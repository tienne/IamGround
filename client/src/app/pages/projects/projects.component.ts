import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../shared/project/project.service';
import {Observable} from 'rxjs/Observable';
import {IProject} from '../../shared/project/project.model';
import {ITag} from '../../shared/tags/tag';
import {TagsService} from '../../shared/tags/tags.service';
import {MdSelect} from '@angular/material';
import 'rxjs/add/operator/takeWhile';
import {MdSnackBar} from '@angular/material';
import {environment} from '../../../environments/environment';
import {I18nService} from '../../shared/i18n/i18n.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, OnDestroy {
  lifeFlag = true;
  @ViewChild('filterSelect')
  filterSelect: MdSelect;
  filterSelected = this.tagsService.getSelectedTags();
  commingSoon: string;

  projects$: Observable<IProject[]>;
  projects: IProject[];

  tags$: Observable<ITag[]> = this.tagsService.tags$;
  tags: ITag[];

  constructor(
    public projectService: ProjectService,
    public tagsService: TagsService,
    private _snackBar: MdSnackBar,
    private _i18n: I18nService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}


  ngOnInit() {
    this.projects$ = this.projectService.findAllProject();

    this.tags$ = this.tags$
      .takeWhile(() => this.lifeFlag);

    this.filterSelect.change
      .takeWhile(() => this.lifeFlag)
      .subscribe(select => {
        this.tagsService.setSelectedTags(select.value);
      });

    if (environment.production) {
      this._i18n.getMessage('project.commingSoon')
        .takeWhile(() => this.lifeFlag)
        .subscribe(msg => {
          this.commingSoon = msg;
        });
    }
  }

  defaultImage(e) {
    return e.target.src = `assets/images/projects/default_project.png`;
  }

  projectClick(project) {
    if (environment.production) {
      this._snackBar.open(this.commingSoon, '', {duration: 2000});
    } else {
      this._router.navigateByUrl(`projects/${project.name}`);
    }
  }
  ngOnDestroy() {
    this.lifeFlag = false;
  }
}
