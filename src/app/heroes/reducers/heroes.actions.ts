import { Action } from '@ngrx/store';
import { Hero } from '../heroes.model';

export const ADD_HERO = '[heroes] add hero';

export class AddHero implements Action {
  readonly type = ADD_HERO;
  constructor(public payload: Hero) {

  }
}

export type All = AddHero;