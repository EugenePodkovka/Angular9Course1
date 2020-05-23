import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: object[], sortingField: string, isDesc = true): unknown {
    const result =  value.sort((a, b) => (
      ('' + this.getObjectValue(a, sortingField)).localeCompare('' + this.getObjectValue(b, sortingField)))  * (!isDesc ? 1 : -1));
    return result;
  }

  private getObjectValue(obj: object, key: string) {
    return key.split('.').reduce((o, k) => o[k], obj);
  }

}
