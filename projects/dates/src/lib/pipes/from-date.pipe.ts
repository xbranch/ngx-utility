import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Pipe({
  name: 'fromDate'
})
export class FromDatePipe implements PipeTransform {

  transform(date: any, date2: any, withoutSuffix: boolean = false): string {
    return moment(date).from(moment(date2), withoutSuffix);
  }
}
