import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 하고 export하는 이유는 https://github.com/angular/angular-cli/issues/2034#issuecomment-302666897 참고
import {ISideItem, ISideSub, SideItemTypes} from './sidenav.model';
export { ISideItem, ISideSub, SideItemTypes } from './sidenav.model';

@Injectable()
export class SidenavService {
  // 열려있는 메뉴
  private _openSubject: BehaviorSubject<ISideItem[]> = new BehaviorSubject<ISideItem[]>([]);
  private _openMenu: ISideItem[] = [];
  openMenu$: Observable<ISideItem[]> = this._openSubject.asObservable();

  constructor() {
    this.openMenu$.subscribe((items: ISideItem[]) => {
      console.log(items);
    });
  }
  menu: ISideItem[] = [
    {
      type: SideItemTypes.separator,
      name: 'About Me'
    },
    {
      name: `Profile`,
      path: 'profile',
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
      subs: [
        {
          name: 'JsonView',
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

  toggleOpen(item: ISideItem) {
    const currentlyOpen = this.isOpen(item) ? [] : [item];

    this._openMenu = currentlyOpen;
    this._openSubject.next(currentlyOpen);
  }

  nextOpen(item: ISideItem[]) {
    const currentlyOpen = item;
    this._openMenu = currentlyOpen;
    this._openSubject.next(currentlyOpen);
  }

  nextOpenByRoute(route: string) {
    const menu = this.findByRoute(route, this.menu),
      currentlyOpen = menu ? [menu] : [];

    this.nextOpen(currentlyOpen);
  }

  isOpen(item: ISideItem) {
    return (this._openMenu.indexOf(item) !== -1);
  }

  hasSubs(item: ISideItem) {
    return item.type === SideItemTypes.dropDown && item.subs && item.subs.length >= 1;
  }

  findByRoute(route: string, menus: ISideItem[] = []) {
    let result: ISideItem;

    for (const menu of menus) {
      if (this.hasSubs(menu)) {
        let found: ISideSub;
        const basePath = menu.path;

        found = menu.subs.find((sub: ISideSub) => {
          return `${basePath}/${sub.path}` === route;
        });

        if (found) {
          result = menu;
          break;
        }
      }
    }

    return result;
  }
}
