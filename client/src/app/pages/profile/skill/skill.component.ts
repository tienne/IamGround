import {Component, OnInit, Input, ViewChild, OnDestroy} from '@angular/core';
import {MdExpansionPanel} from '@angular/material';
import {SkillService, ISkill} from '../../../shared/skill/skill.service';
import {I18nService} from '../../../shared/i18n/i18n.service';
import {ProjectService, IProject} from '../../../shared/project/project.service';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit, OnDestroy {
  lifeFlag = true;
  @Input('skill') skill: ISkill;
  @ViewChild('panel') panel: MdExpansionPanel;
  isOpen: boolean;
  projects$;

  constructor(
    private _i18n: I18nService,
    private _projectService: ProjectService,
    private _skillService: SkillService
  ) { }

  ngOnInit() {
    this.projects$ = this._projectService.findProjectsBySkill(this.skill);

    this.panel.opened
      .takeWhile(() => this.lifeFlag)
      .subscribe(() => this.isOpen = true);

    this.panel.closed
      .takeWhile(() => this.lifeFlag)
      .subscribe(() => this.isOpen = false);
  }

  getTechLogo() {
    return this._skillService.getSkillLogo(this.skill);
  }

  getProjectLogo(project: IProject) {
    return this._projectService.getProjectLogo(project);
  }

  ngOnDestroy() {
    this.lifeFlag = false;
  }
}
