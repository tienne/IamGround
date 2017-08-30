import {Component, Input, OnInit} from '@angular/core';
import {ISideItem, SideItemTypes} from '../sidenav.service';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input('item') item: ISideItem;
  @Input('index') index: number;

  menuTypes = SideItemTypes;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}
