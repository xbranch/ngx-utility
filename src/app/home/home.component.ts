import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  modules = [{
    title: 'ngx-utility/core',
    link: '/core',
    subTitle: 'Core utility module',
    description: 'Core utility module for common pipes, directives etc.',
    icon: 'build'
  }, {
    title: 'ngx-utility/files',
    link: '/files',
    subTitle: 'Files utility module',
    description: 'Small independent module for files utils',
    icon: 'insert_drive_file'
  }, {
    title: 'ngx-utility/dates',
    link: '/dates',
    subTitle: 'Dates utility module',
    description: 'Small independent module for dates utils',
    icon: 'update'
  }];
}
