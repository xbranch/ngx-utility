import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,

    HighlightModule
  ],
  exports: [
    CommonModule,

    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,

    HighlightModule
  ]
})
export class SharedModule {
}
