import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      args = 1;
    }
    return value * args;
    // return null;
  }

}
