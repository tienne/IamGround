import { Pipe, PipeTransform } from '@angular/core';
import {IProject} from '../project/project.model';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const filterBy = Array.isArray(args) && args.length ? args : null;

    return filterBy && value ? value.filter((project: IProject) =>
      project.tags.find((tag) => filterBy.find((filter) => filter.name === tag))
    ) : value;
  }

}
