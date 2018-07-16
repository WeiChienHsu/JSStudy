import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', for attribute: <div app-servers></div>
  // selector: '.app-servers', for class: <div class="app-servers></div>
  selector: 'app-servers', //for element
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
