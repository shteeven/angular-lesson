import { Component, OnInit } from '@angular/core';

// move to app.component
@Component({
  selector: 'app-root',
  template: `<app-heroes></app-heroes>`,
  styles: []
})
export class AppComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
}
