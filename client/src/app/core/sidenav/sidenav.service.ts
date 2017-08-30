import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 하고 export하는 이유는 https://github.com/angular/angular-cli/issues/2034#issuecomment-302666897 참고
import { ISideItem, SideItemTypes} from './sidenav.model';
export { ISideItem, ISideSub, SideItemTypes } from './sidenav.model';

@Injectable()
export class SidenavService {
  constructor() { }
  menu: ISideItem[] = [
    {
      type: SideItemTypes.separator,
      name: 'About Me'
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
    },
    {
      type: SideItemTypes.separator,
      name: 'My Ground'
    },
    {
      name: 'My Interests',
      path: 'interests',
      type: SideItemTypes.link,
      icon: 'lightbulb_outline',
      tooltip: 'My Interest Lists'
    },
    {
      name: 'Utils',
      path: 'utils',
      type: SideItemTypes.dropDown,
      icon: 'iso',
      tooltip: 'My Utils',
      sub: [
        {
          name: 'json view',
          path: 'json'
        },
        {
          name: 'test',
          path: 'test'
        }
      ]
    }
  ];
  // 메뉴 subject
  menuItems = new BehaviorSubject<ISideItem[]>(this.menu);
  // 메뉴 스트림
  menuItems$ = this.menuItems.asObservable();
}
