import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MdExpansionPanel} from '@angular/material';
import {ISkill} from '../../../shared/skill/skill.service';
import {I18nService} from '../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  @Input('tech') tech: ISkill;
  @ViewChild('panel') panel: MdExpansionPanel;
  isOpen: boolean;
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    this.panel.opened.subscribe(() => {
      this.isOpen = true;
    });

    this.panel.closed.subscribe(() => {
      this.isOpen = false;
    });

  }

  getTechLogo() {
    return `assets/images/tech-logos/${this.tech.name}.png`;
  }
}
