import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ISideItem, SideItemTypes} from './sidenav.model';
export { ISideItem, ISideSub, SideItemTypes } from './sidenav.model';

@Injectable()
export class SidenavService {
  constructor() { }
  menu: ISideItem[] = [
    {
      type: SideItemTypes.separator,
      name: 'Introduce'
    },
    {
      name: `I'm Ground`,
      path: 'who',
      type: SideItemTypes.link,
      icon: 'people',
      tooltip: 'who? why? what?'
    },
    {
      name: 'Projects',
      path: 'projects',
      type: SideItemTypes.link,
      icon: 'developer_board',
      tooltip: 'develop projects'
    },
    {
      name: 'Contact',
      path: 'contact',
      type: SideItemTypes.link,
      icon: 'contacts',
      tooltip: 'Hi! David'
    }
  ];
  // 메뉴 subject
  menuItems = new BehaviorSubject<ISideItem[]>(this.menu);
  // 메뉴 스트림
  menuItems$ = this.menuItems.asObservable();
}
