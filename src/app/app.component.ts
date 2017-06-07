import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes/heroes.service';
import { Hero } from './heroes/heroes.interface';


// move to app.component
@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <pre>{{heroes | json}}</pre>
    `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  constructor(private heroesService: HeroesService) {
  }
  ngOnInit() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
