import { NgModule } from '@angular/core';
import { HeroesService } from './heroes.service';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../shared';
import { HeroListModule } from './hero-list';
import { HeroFormModule } from './hero-form';

@NgModule({
  imports: [
    SharedModule,
    HeroListModule,
    HeroFormModule
  ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
  providers: [HeroesService]
})
export class HeroesModule { }
