import {ISkill} from './skill.model';

export const techs: ISkill[] = [
  {
    title: 'JavaScript',
    name: 'javascript',
    category: 'Language',
    proficiency: 40
  },
  {
    title: 'CSS3',
    name: 'css',
    category: 'Language',
    proficiency: 50
  },
  {
    title: 'Angular',
    name: 'angular',
    category: 'Framework',
    parent: 'JavaScript',
    proficiency: 60
  }
];
