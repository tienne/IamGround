/**
 * 테마 인터페이스
 */
export interface ITheme {
  /**
   * 테마 파일 경로
   */
  href: string;
  /**
   * 강조 색상(컬러표값)
   */
  accent: string;
  /**
   * 기본 색상(컬러표값)
   */
  primary: string;
  /**
   * 다크테마 여부
   */
  isDark?: boolean;
  /**
   * 기본테마 여부
   */
  isDefault?: boolean;
}