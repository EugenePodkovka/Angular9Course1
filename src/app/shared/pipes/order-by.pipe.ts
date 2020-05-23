import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: object[], sortingField: string, isDesc = true): unknown {
    return value.sort((a, b) => a[sortingField] - b[sortingField] * (isDesc ? 1 : -1) );
  }

}
