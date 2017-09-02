import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {ISideItem, SideItemTypes, SidenavService} from '../sidenav.service';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {

  @Input('item')
  item: ISideItem;

  @Input('index')
  index: number;

  @ViewChild(RouterLinkActive)
  private route: RouterLinkActive;

  menuTypes = SideItemTypes;

  constructor(
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {
  }

  /**
   * 해당 메뉴가 보여질지 아닐지 검사
   * @returns {boolean}
   */
  isShow(): boolean {
    return !this.item.disabled && this.item.type !== SideItemTypes.separator && this.item.type !== SideItemTypes.icon;
  }

  /**
   * 해당 메뉴가 열려있는지 여부(dropDown 일경우만)
   * @returns {boolean}
   */
  isOpen() {
    return this.sidenavService.isOpen(this.item);
  }

  /**
   * 해당 메뉴에 하위 메뉴가 포함되어있는지 여부(dropDown 일경우만)
   * @returns {boolean | ISideSub[]}
   */
  hasSubs() {
    return this.sidenavService.hasSubs(this.item);
  }

  /**
   * 하위메뉴 오픈 토글
   * @param $event
   */
  dropDownToggle($event) {
    this.sidenavService.toggleOpen(this.item);
  }
}
