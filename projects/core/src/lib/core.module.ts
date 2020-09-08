import { NgModule } from '@angular/core';

import { EmptyPipe } from './pipes/empty.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    EmptyPipe,
    SafeHtmlPipe
  ],
  exports: [
    EmptyPipe,
    SafeHtmlPipe
  ]
})
export class UtilityCoreModule {
}
