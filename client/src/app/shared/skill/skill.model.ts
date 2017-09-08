import {ITranslate} from '../i18n/language';

export interface ISkill {
  title: string;
  name: string;
  category: string;
  parent?: string;
  proficiency?: number;
  description?: ITranslate;
  year?: number;
}
