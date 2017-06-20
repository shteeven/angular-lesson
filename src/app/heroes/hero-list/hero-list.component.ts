import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../heroes.model';


@Component({
  selector: 'app-hero-list',
  template: `
<md-list>
  <h3 md-subheader>Heroes</h3>
  <md-list-item *ngFor="let hero of heroes">
    <md-icon md-list-icon>folder</md-icon>
    <h4 md-line>{{hero.name}}</h4>
    <p md-line> {{hero.id}} </p>
    <button md-mini-fab>
    <md-icon>delete</md-icon>
    </button>
  </md-list-item>
  <md-divider></md-divider>
</md-list>
  `,
  styles: []
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
