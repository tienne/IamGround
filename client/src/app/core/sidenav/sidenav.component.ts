import { Component, OnInit } from '@angular/core';
import { SidenavService, ISideItem } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menus: ISideItem[];
  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
    this._sidenavService.menuItems$.subscribe((menus: ISideItem[]) => {
      this.menus = menus;
    });
  }
}
