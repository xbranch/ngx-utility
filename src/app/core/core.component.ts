import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  html = `<span style="color:red;">Red text</span>`;

  constructor() {
  }

  ngOnInit(): void {
  }
}
