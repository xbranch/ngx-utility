import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  data: {title: 'ngx-utility', pageTitle: 'Home', pageIcon: 'home'}
}, {
  path: 'core',
  loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
  data: {title: 'ngx-utility', pageTitle: 'Core', pageIcon: 'build'}
}, {
  path: 'files',
  loadChildren: () => import('./files/files.module').then(m => m.FilesModule),
  data: {title: 'ngx-utility', pageTitle: 'Files', pageIcon: 'insert_drive_file'}
}, {
  path: 'dates',
  loadChildren: () => import('./dates/dates.module').then(m => m.DatesModule),
  data: {title: 'ngx-utility', pageTitle: 'Dates', pageIcon: 'update'}
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
