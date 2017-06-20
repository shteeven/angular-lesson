import {Component, OnInit} from '@angular/core';
import {HeroesService} from './heroes.service';
import {Hero} from './heroes.model';
import {FormControl, FormGroup, } from "@angular/forms";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [`
  .hero-form {width: 500px;}
  `]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  newHero = this.newHeroForm();

  constructor(private heroesService: HeroesService) {
  }

  newHeroForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      hometown: new FormControl(''),
      power: new FormControl('')
    });
  }

  onAddHero({name, hometown, power}) {
    this.heroesService.addHero(new Hero(name, hometown, power));
    this.newHero = this.newHeroForm();
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
