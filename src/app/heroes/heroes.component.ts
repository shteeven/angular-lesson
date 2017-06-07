import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';
import {Hero} from './heroes.interface';

@Component({
  selector: 'app-heroes',
  template: `
    <h1>{{title}}</h1>
    <pre>{{heroes | json}}</pre>
  `,
  styles: []
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
