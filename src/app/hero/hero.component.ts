import {Component, OnInit} from '@angular/core';
import {Hero} from './hero.interface';

@Component({
  selector: 'app-hero',
  template: `
    <h1>{{title}}</h1>
    <pre>{{hero | json}}</pre>
  `,
  styles: []
})
export class HeroComponent implements OnInit {
  hero: Hero[] = [];

  constructor() {
  }

  ngOnInit() {
    // this.heroService.getHero().then(hero => this.hero = hero);
  }

}
