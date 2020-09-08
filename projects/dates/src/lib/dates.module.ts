import { NgModule } from '@angular/core';

import { FromNowPipe } from './pipes/from-now.pipe';
import { FromDatePipe } from './pipes/from-date.pipe';

@NgModule({
  declarations: [
    FromNowPipe,
    FromDatePipe
  ],
  exports: [
    FromNowPipe,
    FromDatePipe
  ]
})
export class UtilityDatesModule {
}
