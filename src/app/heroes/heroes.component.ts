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
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {
  }

  addHero({name, hometown, power}) {
    this.heroesService.addHero(new Hero(name, hometown, power));
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
