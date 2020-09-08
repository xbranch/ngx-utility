import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';

import { UtilityFilesModule } from '../../../projects/files/src/lib/files.module';

@NgModule({
  imports: [
    SharedModule,
    FilesRoutingModule,

    UtilityFilesModule
  ],
  declarations: [
    FilesComponent
  ]
})
export class FilesModule {
}
