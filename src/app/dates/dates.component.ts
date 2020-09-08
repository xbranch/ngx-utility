import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  now: Date = new Date();
  yesterday: Date = moment().subtract(1, 'day').toDate();
  previousMonth: Date = moment().subtract(1, 'month').toDate();
  previousYear: Date = moment().subtract(1, 'year').toDate();

  constructor() {
  }

  ngOnInit(): void {
  }
}
