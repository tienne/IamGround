/**
 * sidenav 메뉴 type
 * (link/dropDown/icon/separator/extLink)
 */
export enum SideItemTypes {
  link,
  dropDown,
  icon,
  separator,
  extLink
}
/**
 * sidenav 메뉴 인터페이스
 */
export interface ISideItem {
  type: SideItemTypes;              // menu의 type:
  name?: string;                    // menu 노출될 이름
  path?: string;                    // 라우터 경로
  icon?: string;                    // 메뉴 아이콘
  tooltip?: string;                 // 메뉴 툴팁
  disabled?: boolean;               // 메뉴 숨김여부
  sub?: ISideSub[];                 // 하위 메뉴(Array<ISideSub>)
}

/**
 * sidenav 하위 메뉴
 */
export interface ISideSub {
  name: string;                     // 하위메뉴 이름
  path: string;                     // 라우터 경로
}