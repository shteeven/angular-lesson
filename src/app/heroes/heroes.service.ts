import {Injectable} from '@angular/core';
import { Hero } from './heroes.interface';


const HEROES: Hero[] = [
  {id: 1, name: 'Bombasto'},
  {id: 2, name: 'Tornado'},
  {id: 3, name: 'Magneta'},
];

@Injectable()
export class HeroesService {

  constructor() {
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES); // TODO: get hero data from the server;
  }

}
