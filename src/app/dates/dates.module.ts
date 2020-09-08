import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DatesRoutingModule } from './dates-routing.module';
import { DatesComponent } from './dates.component';

import { UtilityDatesModule } from '../../../projects/dates/src/lib/dates.module';

@NgModule({
  imports: [
    SharedModule,
    DatesRoutingModule,

    UtilityDatesModule
  ],
  declarations: [
    DatesComponent
  ]
})
export class DatesModule {
}
