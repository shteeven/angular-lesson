import { Hero } from '../heroes.model';
import { ADD_HERO } from './heroes.actions';
import {Action} from "@ngrx/store";

export type State = Hero[];

const initialState: State = [];

export const heroes = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_HERO:
      return [...state, action.payload];
    default:
      return state
  }
};