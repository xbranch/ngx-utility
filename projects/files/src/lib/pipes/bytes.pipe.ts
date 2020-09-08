import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  private units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(size: number = 0, precision: number = 2, unitLimit: number = this.units.length - 1): string {
    if (isNaN(parseFloat(String(size))) || !isFinite(size)) {
      return '?';
    }

    unitLimit = Math.min(unitLimit, this.units.length - 1);

    let unit = 0;

    while (size >= 1024 && unit < unitLimit) {
      size /= 1024;
      unit++;
    }

    return size.toFixed(+precision) + ' ' + this.units[unit];
  }
}
