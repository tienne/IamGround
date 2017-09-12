import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../shared/project/project.service';
import {Observable} from 'rxjs/Observable';
import {IProject} from '../../shared/project/project.model';
import {ITag} from '../../shared/tags/tag';
import {TagsService} from '../../shared/tags/tags.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<IProject[]>;
  tags$: Observable<ITag[]>;

  constructor(
    public projectService: ProjectService,
    public tagsService: TagsService
  ) { }

  ngOnInit() {
    this.projects$ = this.projectService.findAllProject();
    this.tags$ = this.tagsService.findAllTags();
  }

  defaultImage(e) {
    return e.target.src = `assets/images/projects/default_project.png`;
  }

}
