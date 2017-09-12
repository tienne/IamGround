import {ITranslate} from '../i18n/language';

export interface IProject {
  order: number;
  title: string;
  subTitle?: ITranslate;
  name: string;
  skills: string[];
  tags: string[];
}
