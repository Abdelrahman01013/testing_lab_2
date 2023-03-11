import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pi'
})
export class PiPipe implements PipeTransform {

  transform(val:number): number {
    return val*5;
  }

}
