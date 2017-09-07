export interface Language {
  code: LanguageCode;
  title: string;
}

/**
 * 언어 코드(ko / en)
 */
export type LanguageCode = 'ko' | 'en';

/**
 * 다국어 인터페이스
 */
export interface ITranslate {
  en?: string;
  ko?: string;
}
