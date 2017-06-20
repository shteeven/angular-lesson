import {Injectable} from '@angular/core';
import {Hero} from './heroes.model';
import { Store } from '@ngrx/store';
import { AddHero } from './reducers';
import {Observable} from "rxjs/Observable";




@Injectable()
export class HeroesService {
  heroes: Hero[] = [
    new Hero('Bombasto'),
    new Hero('Tornado'),
    new Hero('Magneta'),
  ];
  constructor(private _store: Store<any>) {
    this.heroes.map((hero) => {
      this.addHero(hero)
    });
  }

  getHeroes(): Observable<Hero[]> {
    return this._store.select(store => store.heroes);
  }

  addHero(hero: Hero) {
    this._store.dispatch(new AddHero(hero))
  }

}
