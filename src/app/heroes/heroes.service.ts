import {Injectable} from '@angular/core';
import {Hero} from './heroes.model';

@Injectable()
export class HeroesService {
  heroes: Hero[] = [
    new Hero('Bombasto'),
    new Hero('Tornado'),
    new Hero('Magneta'),
  ];
  constructor() {
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(this.heroes); // TODO: get hero data from the server;
  }

  addHero(hero: Hero) {
    console.log(hero);
    this.heroes = [...this.heroes, hero];
  }

}
