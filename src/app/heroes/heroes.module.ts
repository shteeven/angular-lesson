import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './heroes.service';
import { HeroesComponent } from './heroes.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
  providers: [HeroesService]
})
export class HeroesModule { }
