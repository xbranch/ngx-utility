import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(date: any, withoutSuffix: boolean = false): string {
    return moment(date).fromNow(withoutSuffix);
  }
}
