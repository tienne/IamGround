import {Component, Input, OnInit, ViewChild } from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {ISideItem, SideItemTypes} from '../sidenav.service';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  open: boolean;
  hasSub: boolean;

  @Input('item')
  item: ISideItem;

  @Input('index')
  index: number;

  @ViewChild(RouterLinkActive)
  private route: RouterLinkActive;

  menuTypes = SideItemTypes;

  constructor() {}

  ngOnInit() {
    this.hasSub = this.item.sub && this.item.type === SideItemTypes.dropDown;
    this.isOpen();
  }

  /**
   * 해당 메뉴가 보여질지 아닐지 검사
   * @returns {boolean}
   */
  isShow(): boolean {
    return !this.item.disabled && this.item.type !== SideItemTypes.separator && this.item.type !== SideItemTypes.icon;
  }

  isOpen(): boolean {
    if (this.route) {
      this.open = this.open || this.route.isActive;
      return this.open;
    }
    return false;
  }

  toggle($event) {
    if (this.hasSub) {
      const parentEl = $event.target.closest('md-list-item');
      console.log(parentEl);

      // 하위 메뉴 클릭시는 오픈여부 변경안함
      if (!parentEl.classList.contains('has-submenu')) {
        console.log(parentEl.classList);
        return ;
      }
      this.open = !this.isOpen();
    }
  }
}
