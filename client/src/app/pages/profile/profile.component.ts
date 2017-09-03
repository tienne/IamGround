import {Component, Directive, OnInit, ViewChild} from '@angular/core';
import {MdAccordion} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('techWrapper') techWrapper: MdAccordion;

  techs = [
    {
      name: 'PHP',
      category: 'Language'
    },
    {
      name: 'C#',
      category: 'Language'
    },
    {
      name: 'JavaScript',
      category: 'Language'
    },
    {
      name: 'Angular',
      category: 'Framework',
      parent: 'JavaScript'
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.techWrapper);
  }

}
