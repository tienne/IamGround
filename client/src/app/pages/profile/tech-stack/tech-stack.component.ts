import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MdExpansionPanel} from '@angular/material';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  @Input('tech') tech;
  @ViewChild('panel') panel: MdExpansionPanel;
  isOpen: boolean;
  constructor() { }

  ngOnInit() {
    this.panel.opened.subscribe(() => {
      this.isOpen = true;
    });

    this.panel.closed.subscribe(() => {
      this.isOpen = false;
    });
  }

}
