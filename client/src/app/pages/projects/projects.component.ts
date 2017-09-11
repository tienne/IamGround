import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../shared/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    //
  }

}
