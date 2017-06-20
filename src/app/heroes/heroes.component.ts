import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';
import {Hero} from './heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [``]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes$;

  constructor(private heroesService: HeroesService) {
  }

  addHero({name, hometown, power}) {
    this.heroesService.addHero(new Hero(name, hometown, power));
  }

  getHeroes() {
    this.heroes$ = this.heroesService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
