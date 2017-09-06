export interface Language {
  code: LanguageCode;
  title: string;
}

/**
 * 언어 코드(ko / en)
 */
export type LanguageCode = 'ko' | 'en';
