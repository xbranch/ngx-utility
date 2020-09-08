import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

import { UtilityCoreModule } from '../../../projects/core/src/lib/core.module';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,

    UtilityCoreModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule {
}
